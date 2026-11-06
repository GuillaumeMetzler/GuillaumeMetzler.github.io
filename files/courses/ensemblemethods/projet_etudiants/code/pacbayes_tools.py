"""Project, Part 2: PAC-Bayesian bounds and their minimization.

Two bounds on the Gibbs risk, each with the algorithm that minimizes it, in two settings:
  * categorical distributions on a finite set of voters (decision stumps);
  * Gaussian distributions on linear classifiers.
    Bound A - linear bound (Catoni): emp + (KL + ln(|grid|/delta)) / lam + lam / (8m), for lam in a grid
               fixed in advance (union bound over the grid). For a fixed lam its minimizer is the Gibbs
               posterior Q(h) ~ P(h) exp(-lam emp(h)) (categorical) or a gradient descent (Gaussian).
    Bound B - McAllester's bound: emp + sqrt((KL + ln(2 sqrt(m)/delta)) / (2m)), minimized directly
               by gradient descent (no parameter lam).
Seeger's bound (kl version) is also computed for every posterior: it is the tightest certificate.

Run:  python pacbayes_tools.py 
"""
import os
import sys
import numpy as np
from scipy.optimize import minimize
from scipy.stats import norm
from sklearn.model_selection import train_test_split

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from benchkit import real_dataset   

DELTA = 0.05
GRID = [2 ** k for k in range(15)]                 # values of lambda, fixed in advance for bound A


# =================================================================== 1. the bounds
def kl(q, p):
    """Binary kl(q || p), with 0 ln 0 = 0."""
    p = min(max(p, 1e-12), 1 - 1e-12)
    out = 0.0
    if q > 0:
        out += q * np.log(q / p)
    if q < 1:
        out += (1 - q) * np.log((1 - q) / (1 - p))
    return out


def kl_inv_upper(q, eps, n_iter=60):
    """klup(q, eps) = max{ p in [q, 1] : kl(q || p) <= eps }, by bisection."""
    lo, hi = q, 1.0
    for _ in range(n_iter):
        mid = (lo + hi) / 2
        if kl(q, mid) > eps:
            hi = mid
        else:
            lo = mid
    return hi


def bound_linear(emp, KL, m, lam, delta=DELTA, n_grid=len(GRID)):
    """Bound A (Catoni), valid for all lam of a grid of size n_grid (union bound: delta / n_grid)."""
    return emp + (KL + np.log(n_grid / delta)) / lam + lam / (8 * m)


def bound_mcallester(emp, KL, m, delta=DELTA):
    """Bound B (McAllester)."""
    return emp + np.sqrt((KL + np.log(2 * np.sqrt(m) / delta)) / (2 * m))


def bound_seeger(emp, KL, m, delta=DELTA):
    """Seeger's bound (kl version): the tightest of the three."""
    return kl_inv_upper(emp, (KL + np.log(2 * np.sqrt(m) / delta)) / m)


# =================================================================== 2. categorical setting
def make_stumps(Xp, n_thr=10):
    """Stumps (j, t, s): x -> s * sign(x_j - t); thresholds = quantiles of the PRIOR part Xp."""
    H = []
    for j in range(Xp.shape[1]):
        for t in np.unique(np.quantile(Xp[:, j], np.linspace(0.05, 0.95, n_thr))):
            for s in (1, -1):
                H.append((j, t, s))
    return H


def stump_votes(H, X):
    """Matrix V (n_voters x m) of the predictions in {-1, +1}."""
    return np.array([s * np.where(X[:, j] > t, 1, -1) for j, t, s in H])


def kl_categorical(Q, P):
    """KL(Q || P) for two distributions on a finite set (0 ln 0 = 0)."""
    s = Q > 0
    return float(np.sum(Q[s] * np.log(Q[s] / P[s])))


def voter_risks(V, y):
    """Empirical risk of each voter."""
    return (V != y[None, :]).mean(axis=1)


def gibbs_risk(Q, V, y):
    """Risk of the Gibbs classifier on (V, y): sum_h Q(h) * (error rate of h)."""
    return float(Q @ voter_risks(V, y))


def vote_risk(Q, V, y):
    """Risk of the majority vote B_Q (ties counted as errors)."""
    return float(np.mean(y * (Q @ V) <= 1e-12))


def gibbs_posterior(P, L, lam):
    """Q(h) proportional to P(h) exp(-lam L(h)): the minimizer of  Q.L + KL(Q||P) / lam."""
    w = np.log(P) - lam * (L - L.min())
    Q = np.exp(w - w.max())
    return Q / Q.sum()


def learn_linear_categorical(P, L, m, grid=GRID, delta=DELTA):
    """Bound A: Gibbs posterior for each lam of the grid; keep the one with the smallest bound A."""
    rows = []
    for lam in grid:
        Q = gibbs_posterior(P, L, lam)
        emp, KL = float(Q @ L), kl_categorical(Q, P)
        rows.append(dict(lam=lam, Q=Q, emp=emp, KL=KL, bound=bound_linear(emp, KL, m, lam, delta, len(grid)),
                         seeger=bound_seeger(emp, KL, m, delta)))
    return min(rows, key=lambda r: r["bound"]), rows


def learn_mcallester_categorical(P, L, m, delta=DELTA):
    """Bound B: minimize Q.L + sqrt((KL(Q||P) + c) / (2m)) over Q = softmax(theta), by L-BFGS."""
    c = np.log(2 * np.sqrt(m) / delta)

    def f(theta):
        Q = np.exp(theta - theta.max()); Q /= Q.sum()
        KL = kl_categorical(Q, P)
        r = np.sqrt((KL + c) / (2 * m))
        gQ = L + (np.log(np.maximum(Q, 1e-300) / P) + 1) / (4 * m * r)     # gradient w.r.t. Q
        return float(Q @ L) + r, Q * (gQ - Q @ gQ)                           # chain rule through softmax

    theta = minimize(f, np.log(P), jac=True, method="L-BFGS-B").x
    Q = np.exp(theta - theta.max()); Q /= Q.sum()
    emp, KL = float(Q @ L), kl_categorical(Q, P)
    return dict(Q=Q, emp=emp, KL=KL, bound=bound_mcallester(emp, KL, m, delta), seeger=bound_seeger(emp, KL, m, delta))


# =================================================================== 3. Gaussian setting
def add_bias(X):
    return np.hstack([X, np.ones((len(X), 1))])


def probit_risk(w, X, y, sigma=1.0):
    """Gibbs risk of N(w, sigma^2 I) on linear classifiers: mean of Phi(-y <w,x> / (sigma ||x||))."""
    t = y * (X @ w) / (sigma * np.linalg.norm(X, axis=1))
    return float(np.mean(norm.cdf(-t)))


def kl_gaussian(w, w0, sigma=1.0):
    """KL( N(w, sigma^2 I) || N(w0, sigma^2 I) ) = ||w - w0||^2 / (2 sigma^2)."""
    return float(np.sum((w - w0) ** 2) / (2 * sigma ** 2))


def linear_vote_risk(w, X, y):
    """Risk of the majority vote of N(w, sigma^2 I): the linear classifier sign(<w,x>)."""
    return float(np.mean(y * (X @ w) <= 0))


def _probit_parts(X, y, sigma):
    return (y[:, None] * X) / (sigma * np.linalg.norm(X, axis=1)[:, None])      # t = A @ w


def learn_linear_gaussian(X, y, w0, sigma=1.0, grid=GRID, delta=DELTA):
    """Bound A: for each lam, minimize probit_risk(w) + KL / lam (L-BFGS, warm start); keep the best bound A."""
    m, A = len(y), _probit_parts(X, y, sigma)

    def f(w, lam):
        t = A @ w
        return (np.mean(norm.cdf(-t)) + np.sum((w - w0) ** 2) / (2 * sigma ** 2 * lam),
                -(norm.pdf(t) @ A) / m + (w - w0) / (sigma ** 2 * lam))

    rows, w = [], w0.copy()
    for lam in grid:
        w = minimize(f, w, args=(lam,), jac=True, method="L-BFGS-B").x
        emp, KL = probit_risk(w, X, y, sigma), kl_gaussian(w, w0, sigma)
        rows.append(dict(lam=lam, w=w.copy(), emp=emp, KL=KL, bound=bound_linear(emp, KL, m, lam, delta, len(grid)),
                         seeger=bound_seeger(emp, KL, m, delta)))
    return min(rows, key=lambda r: r["bound"]), rows


def learn_mcallester_gaussian(X, y, w0, sigma=1.0, delta=DELTA):
    """Bound B: minimize probit_risk(w) + sqrt((KL + c) / (2m)) directly (L-BFGS)."""
    m, A = len(y), _probit_parts(X, y, sigma)
    c = np.log(2 * np.sqrt(m) / delta)

    def f(w):
        t = A @ w
        r = np.sqrt((np.sum((w - w0) ** 2) / (2 * sigma ** 2) + c) / (2 * m))
        return (np.mean(norm.cdf(-t)) + r,
                -(norm.pdf(t) @ A) / m + (w - w0) / (sigma ** 2 * 4 * m * r))

    w = minimize(f, w0 + 1e-3, jac=True, method="L-BFGS-B").x
    emp, KL = probit_risk(w, X, y, sigma), kl_gaussian(w, w0, sigma)
    return dict(w=w, emp=emp, KL=KL, bound=bound_mcallester(emp, KL, m, delta), seeger=bound_seeger(emp, KL, m, delta))


# =================================================================== 4. protocol
def split(X, y, seed=0):
    """test 30% | training 70% = prior part (20% of it) + bound sample S (80% of it)."""
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, stratify=y, random_state=seed)
    Xp, Xs, yp, ys = train_test_split(Xtr, ytr, test_size=0.8, stratify=ytr, random_state=seed)
    return Xp, yp, Xs, ys, Xte, yte


def standardize(Xp, *Xs):
    """Standardization with the statistics of the PRIOR part only (so that S is not used)."""
    mu, sd = Xp.mean(0), Xp.std(0) + 1e-12
    return [(Z - mu) / sd for Z in (Xp,) + Xs]


def run_categorical(X, y, seed=0, prior="uniform"):
    """Both bounds on decision stumps. prior = 'uniform' or 'learned' (Gibbs posterior on the prior part)."""
    Xp, yp, Xs, ys, Xte, yte = split(X, y, seed)
    H = make_stumps(Xp)
    V, Vte = stump_votes(H, Xs), stump_votes(H, Xte)
    P = np.full(len(H), 1 / len(H))
    if prior == "learned":
        P = np.maximum(gibbs_posterior(P, voter_risks(stump_votes(H, Xp), yp), len(yp) / 4), 1e-300)
        P /= P.sum()
    L, m = voter_risks(V, ys), len(ys)
    A, _ = learn_linear_categorical(P, L, m)
    B = learn_mcallester_categorical(P, L, m)
    out = {}
    for name, r in [("A (linear)", A), ("B (McAllester)", B)]:
        out[name] = dict(bound=r["bound"], seeger=r["seeger"], KL=r["KL"], emp=r["emp"], neff=1 / np.sum(r["Q"] ** 2),
                         test_gibbs=gibbs_risk(r["Q"], Vte, yte), test_vote=vote_risk(r["Q"], Vte, yte))
    return out


def run_gaussian(X, y, seed=0, prior="zero", sigma=1.0):
    """Both bounds on linear classifiers. prior = 'zero' (N(0, s^2 I)) or 'learned' (mean learned on the prior part)."""
    Xp, yp, Xs, ys, Xte, yte = split(X, y, seed)
    Zp, Zs, Zte = [add_bias(Z) for Z in standardize(Xp, Xs, Xte)]
    w0 = np.zeros(Zs.shape[1])
    if prior == "learned":
        w0 = learn_mcallester_gaussian(Zp, yp, w0, sigma)["w"]
    A, _ = learn_linear_gaussian(Zs, ys, w0, sigma)
    B = learn_mcallester_gaussian(Zs, ys, w0, sigma)
    out = {}
    for name, r in [("A (linear)", A), ("B (McAllester)", B)]:
        out[name] = dict(bound=r["bound"], seeger=r["seeger"], KL=r["KL"], emp=r["emp"],
                         test_gibbs=probit_risk(r["w"], Zte, yte, sigma), test_vote=linear_vote_risk(r["w"], Zte, yte))
    return out


def show(title, out):
    print(title)
    print(f"  {'bound':16s} {'its value':>9s} {'Seeger':>7s} {'KL':>6s} {'emp':>6s} {'test Gibbs':>10s} {'test vote':>9s}")
    for name, r in out.items():
        print(f"  {name:16s} {r['bound']:9.3f} {r['seeger']:7.3f} {r['KL']:6.2f} {r['emp']:6.3f} "
              f"{r['test_gibbs']:10.3f} {r['test_vote']:9.3f}" + (f"   neff {r['neff']:.1f}" if "neff" in r else ""))


if __name__ == "__main__":
    print("bounds for emp = 0.10, KL = 5, m = 1000:  linear (lam = 256)",
          round(bound_linear(0.10, 5.0, 1000, 256), 4), "| McAllester", round(bound_mcallester(0.10, 5.0, 1000), 4),
          "| Seeger", round(bound_seeger(0.10, 5.0, 1000), 4))
    X, y = real_dataset("wdbc")
    show("wdbc, stumps, uniform prior", run_categorical(X, y))
    show("wdbc, stumps, learned prior", run_categorical(X, y, prior="learned"))
    show("wdbc, linear, prior N(0, I)", run_gaussian(X, y))
    show("wdbc, linear, prior N(w0, I), w0 learned", run_gaussian(X, y, prior="learned"))
