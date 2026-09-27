# -*- coding: utf-8 -*-
from nb_helpers_en import md, demo, exercise, question, answer, build_notebooks

C = []
C.append(md(r"""
# PAC-Bayes 4 -- Learning the weights of a forest by minimizing a bound

A PAC-Bayesian bound holds for all posteriors simultaneously, so we can **minimize it** over the weights $\rho$ of the voters: the resulting vote comes with its own risk certificate
(*self-bounding* learning, lecture notes, Sections 6 and 7). We work with a random forest whose trees are evaluated on their out-of-bag (OOB) samples, and compare three posteriors:
the uniform one (standard random forest), the minimizer of the **first-order** bound (Thiemann et al., 2017) and the minimizer of the **tandem** bound (Masegosa et al., 2020).
The last part (Master level) minimizes a PAC-Bayesian C-bound directly (in the spirit of Viallard et al., 2021).
"""))
C.append(demo(r"""
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import minimize
from sklearn.datasets import make_classification, load_digits, load_breast_cancer, make_moons
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

rng = np.random.RandomState(0)

class BaggedTrees:
    def __init__(self, n_estimators=100, max_features="sqrt", max_depth=None, bootstrap_frac=0.5, random_state=0):
        self.n_estimators, self.max_features, self.max_depth = n_estimators, max_features, max_depth
        self.bootstrap_frac, self.random_state = bootstrap_frac, random_state
    def fit(self, X, y):
        r = np.random.RandomState(self.random_state)
        m = len(y); k = int(self.bootstrap_frac * m)
        self.trees_, oob = [], []
        for t in range(self.n_estimators):
            idx = r.randint(0, m, k)
            mask = np.ones(m, bool); mask[idx] = False
            self.trees_.append(DecisionTreeClassifier(max_features=self.max_features, max_depth=self.max_depth,
                                                      random_state=r.randint(1 << 30)).fit(X[idx], y[idx]))
            oob.append(mask)
        self.oob_ = np.array(oob); return self
    def votes(self, X):
        return np.array([t.predict(X) for t in self.trees_])

def oob_stats(bt, X, y):
    # OOB losses (first order), tandem losses and disagreements on OOB intersections
    V = bt.votes(X); O = bt.oob_.astype(float); Err = (V != y).astype(float)
    Eo = Err * O
    L = Eo.sum(1) / O.sum(1); n1 = int(O.sum(1).min())
    both = O @ O.T
    Lt = (Eo @ Eo.T) / np.maximum(both, 1); n2 = int(both.min())
    D = np.zeros_like(both)
    for t in range(len(V)):
        D[t] = ((V[t] != V) * O[t] * O).sum(1)
    D = D / np.maximum(both, 1)
    return L, n1, Lt, n2, D

def kl_bin(q, p):
    p = min(max(p, 1e-12), 1 - 1e-12)
    t1 = q * np.log(q / p) if q > 0 else 0.0
    t2 = (1 - q) * np.log((1 - q) / (1 - p)) if q < 1 else 0.0
    return t1 + t2

def kl_inv_upper(q, eps, tol=1e-9):
    lo, hi = q, 1.0
    while hi - lo > tol:
        mid = (lo + hi) / 2
        if kl_bin(q, mid) > eps: hi = mid
        else: lo = mid
    return hi

def kl_inv_lower(q, eps, tol=1e-9):
    lo, hi = 0.0, q
    while hi - lo > tol:
        mid = (lo + hi) / 2
        if kl_bin(q, mid) > eps: lo = mid
        else: hi = mid
    return lo

def kl_div(q, p):
    mask = q > 0
    return np.sum(q[mask] * np.log(q[mask] / p[mask]))

def softmax(z):
    z = z - z.max(); e = np.exp(z); return e / e.sum()

def fo_bound(rho, pi, L, n, delta=0.05):
    return min(1, 2 * kl_inv_upper(rho @ L, (kl_div(rho, pi) + np.log(2 * np.sqrt(n) / delta)) / n))

def tnd_bound(rho, pi, Lt, n, delta=0.05):
    return min(1, 4 * kl_inv_upper(rho @ Lt @ rho, (2 * kl_div(rho, pi) + np.log(2 * np.sqrt(n) / delta)) / n))

def mv_risk(V, y, rho):
    return np.mean(np.where(rho @ V >= 0, 1, -1) != y)
"""))
C.append(demo(r"""
Xd, yd = load_digits(return_X_y=True)
yd = np.where(yd >= 5, 1, -1)
Xtr, Xte, ytr, yte = train_test_split(Xd, yd, test_size=0.3, random_state=0)
bt = BaggedTrees(100, random_state=0).fit(Xtr, ytr)
L, n1, Lt, n2, D = oob_stats(bt, Xtr, ytr)
Vte = bt.votes(Xte)
pi = np.ones(100) / 100
print(f"m={len(ytr)}, n1={n1}, n2={n2}")
print(f"uniform: test MV {mv_risk(Vte, yte, pi):.3f}  FO bound {fo_bound(pi, pi, L, n1):.3f}  TND bound {tnd_bound(pi, pi, Lt, n2):.3f}")
"""))

# ---------------------------------------------------------------- II
C.append(md(r"""
## I. Minimizing the first-order bound

The PAC-Bayes-$\lambda$ bound gives $R(G_\rho)\leq \frac{\rho^\top\hat L}{1-\lambda/2}+\frac{\mathrm{KL}(\rho\|\pi)+\ln\frac{2\sqrt{n}}{\delta}}{\lambda(1-\lambda/2)n}$. For fixed $\lambda$, the minimizer is the Gibbs posterior
$\rho_t\propto\pi_t e^{-\lambda n\hat L_t}$; for fixed $\rho$, $\lambda$ has the closed form $\lambda^\star=2/(\sqrt{2n\rho^\top\hat L/(\mathrm{KL}+\ln\frac{2\sqrt n}\delta)+1}+1)$. We alternate (Algorithm 3 of the lecture notes).
"""))
C.append(demo(r"""
def optimize_fo(pi, L, n, delta=0.05, n_iter=200):
    lam = 1.0
    for _ in range(n_iter):
        rho = softmax(np.log(pi) - lam * n * L)
        c = kl_div(rho, pi) + np.log(2 * np.sqrt(n) / delta)
        lam_new = 2 / (np.sqrt(2 * n * (rho @ L) / c + 1) + 1)
        if abs(lam_new - lam) < 1e-10:
            break
        lam = lam_new
    return rho

rho_fo = optimize_fo(pi, L, n1)
print(f"FO-optimized: test MV {mv_risk(Vte, yte, rho_fo):.3f}  FO bound {fo_bound(rho_fo, pi, L, n1):.3f}  "
      f"TND bound {tnd_bound(rho_fo, pi, Lt, n2):.3f}  KL {kl_div(rho_fo, pi):.2f}")
print("effective number of trees 1/sum(rho^2):", 1 / np.sum(rho_fo**2))
plt.bar(range(100), np.sort(rho_fo)[::-1]); plt.axhline(0.01, color="C3", label="uniform")
plt.xlabel("trees (sorted)"); plt.ylabel("rho"); plt.legend(); plt.show()
"""))
C.append(question(r"""Compare the FO certificate and the test risk of the vote for the uniform and the FO-optimized posterior. How many trees effectively vote after optimization? Why does the vote get worse while the certificate improves?""", 1))
C.append(answer(r"""The FO bound decreases (the posterior focuses on the trees with the smallest OOB loss, which lowers the Gibbs risk), but the vote now relies on a handful of trees: the effective number of voters drops from 100 to a few, the diversity is lost and the test risk of the vote increases a lot (typically from about 4-5% to 10-15% on this dataset). The first-order bound only sees the average quality of the trees, not the correlation of their errors, so minimizing it destroys what makes the vote good."""))

# ---------------------------------------------------------------- III
C.append(md(r"""
## II. Minimizing the tandem bound

The tandem bound with the PAC-Bayes-$\lambda$ relaxation reads
$$\mathcal B_{\mathrm{TND}}(\rho,\lambda)=4\Big[\frac{\rho^\top\hat{\mathbf L}\rho}{1-\lambda/2}+\frac{2\mathrm{KL}(\rho\|\pi)+\ln\frac{2\sqrt{n_2}}{\delta}}{\lambda(1-\lambda/2)n_2}\Big].$$
There is no closed form in $\rho$ anymore. We parametrize $\rho=\mathrm{softmax}(\theta)$ and use a gradient-based solver. The chain rule through the softmax gives
$\nabla_\theta=\rho\odot(g-\rho^\top g)$ where $g=\nabla_\rho$. Below is the same machinery applied to the **first-order** objective for a fixed $\lambda$: we check that we recover the Gibbs posterior.
"""))
C.append(demo(r"""
def fo_objective(theta, pi, L, n, lam, delta=0.05):
    rho = softmax(theta)
    c = np.log(2 * np.sqrt(n) / delta)
    val = (rho @ L) / (1 - lam / 2) + (kl_div(rho, pi) + c) / (lam * (1 - lam / 2) * n)
    g = L / (1 - lam / 2) + (np.log(np.maximum(rho, 1e-300) / pi) + 1) / (lam * (1 - lam / 2) * n)
    return val, rho * (g - rho @ g)

lam = 0.3
res = minimize(fo_objective, np.log(pi), args=(pi, L, n1, lam), jac=True, method="L-BFGS-B")
rho_grad = softmax(res.x)
rho_closed = softmax(np.log(pi) - lam * n1 * L)
print("max |difference| with the Gibbs posterior:", np.abs(rho_grad - rho_closed).max())
"""))
C.append(md(r"""
### Exercise 1

Write `optimize_tnd(pi, Lt, n2, delta)` which alternates (i) a minimization in $\theta$ of $\mathcal B_{\mathrm{TND}}(\mathrm{softmax}(\theta),\lambda)$ with L-BFGS (write the gradient: $\nabla_\rho=\frac{2\hat{\mathbf L}\rho}{1-\lambda/2}+\frac{2(\ln(\rho/\pi)+1)}{\lambda(1-\lambda/2)n_2}$) and
(ii) the closed-form update $\lambda^\star=2/(\sqrt{2n_2\,\rho^\top\hat{\mathbf L}\rho/(2\mathrm{KL}+\ln\frac{2\sqrt{n_2}}\delta)+1}+1)$, for 20 rounds at most.
Report the test risk of the vote, the TND certificate (with `tnd_bound`) and the effective number of trees, and compare with the uniform and FO posteriors.
"""))
C.append(exercise(
    "optimize_tnd: alternate L-BFGS on softmax logits (tandem lambda-objective, analytic gradient)\nand the closed-form lambda; then test MV, TND bound, effective number of trees.",
    r"""
def optimize_tnd(pi, Lt, n, delta=0.05, n_rounds=20):
    c0 = np.log(2 * np.sqrt(n) / delta)
    theta, lam = np.log(pi).copy(), 1.0
    for _ in range(n_rounds):
        def f(th):
            rho = softmax(th)
            val = (rho @ Lt @ rho) / (1 - lam / 2) + (2 * kl_div(rho, pi) + c0) / (lam * (1 - lam / 2) * n)
            g = 2 * Lt @ rho / (1 - lam / 2) + 2 * (np.log(np.maximum(rho, 1e-300) / pi) + 1) / (lam * (1 - lam / 2) * n)
            return val, rho * (g - rho @ g)
        theta = minimize(f, theta, jac=True, method="L-BFGS-B").x
        rho = softmax(theta)
        lam_new = 2 / (np.sqrt(2 * n * (rho @ Lt @ rho) / (2 * kl_div(rho, pi) + c0) + 1) + 1)
        if abs(lam_new - lam) < 1e-6:
            break
        lam = lam_new
    return softmax(theta)

rho_tnd = optimize_tnd(pi, Lt, n2)
for name, r in [("uniform", pi), ("FO", rho_fo), ("TND", rho_tnd)]:
    print(f"{name:8s} test MV {mv_risk(Vte, yte, r):.3f}  FO bound {fo_bound(r, pi, L, n1):.3f}  "
          f"TND bound {tnd_bound(r, pi, Lt, n2):.3f}  effective #trees {1 / np.sum(r**2):6.1f}")
"""))
C.append(question(r"""Why does the tandem objective keep many trees? Look at the term $\rho^\top\hat{\mathbf L}\rho$: which pairs of trees does it penalize?""", 2))
C.append(answer(r"""The quadratic term penalizes pairs of trees that make errors *on the same examples*. Putting weight on two trees that err on different points is cheap, so the minimizer spreads the weights over diverse trees; the doubled KL also pulls it towards the uniform prior. The vote remains as accurate as the uniform forest (sometimes slightly better) and its certificate is tighter than with the uniform weights."""))

# ---------------------------------------------------------------- IV
C.append(md(r"""
## III. Comparison on several datasets

Let us run the three posteriors on four datasets, with 5 random splits each.
"""))
C.append(demo(r"""
def load_all():
    out = {}
    X, y = load_breast_cancer(return_X_y=True); out["breast cancer"] = (X, 2 * y - 1)
    X, y = load_digits(return_X_y=True); out["digits"] = (X, np.where(y >= 5, 1, -1))
    X, y = make_moons(2000, noise=0.3, random_state=0); out["moons"] = (X, 2 * y - 1)
    X, y = make_classification(3000, 20, n_informative=8, flip_y=0.05, random_state=2); out["simulated"] = (X, 2 * y - 1)
    return out

def run(X, y, seed):
    Xa, Xb, ya, yb = train_test_split(X, y, test_size=0.3, random_state=seed)
    f = BaggedTrees(100, random_state=seed).fit(Xa, ya)
    L_, n1_, Lt_, n2_, _ = oob_stats(f, Xa, ya)
    V_ = f.votes(Xb); p_ = np.ones(100) / 100
    out = []
    for r in [p_, optimize_fo(p_, L_, n1_), optimize_tnd(p_, Lt_, n2_)]:
        out.append([mv_risk(V_, yb, r), fo_bound(r, p_, L_, n1_), tnd_bound(r, p_, Lt_, n2_)])
    return np.array(out)

table = {}
for name, (X, y) in load_all().items():
    table[name] = np.mean([run(X, y, s) for s in range(5)], axis=0)
    print(name)
    for lab, row in zip(["uniform", "FO-opt", "TND-opt"], table[name]):
        print(f"   {lab:8s} test MV {row[0]:.3f}   FO bound {row[1]:.3f}   TND bound {row[2]:.3f}")
"""))
C.append(question(r"""Summarize: which posterior gives the best vote? which gives the best certificate? Is there a dataset on which the FO-optimized forest is competitive, and why?""", 3))
C.append(answer(r"""The uniform and TND-optimized forests give the best votes (very close to each other); the FO-optimized forest is clearly worse on `digits` and on the simulated data, and slightly worse elsewhere. For the certificate, there is no universal winner: the FO bound of the FO-optimized posterior is the smallest on `breast cancer`, `moons` and the simulated data, whereas the TND bound of the TND-optimized posterior wins on `digits`, where the trees are very diverse. But a certificate only matters for the classifier we deploy: the FO-optimized vote has a good certificate for a bad classifier. The TND-optimized posterior is the best compromise: an accurate vote with a certificate always better than the uniform one. On `moons` (2 features), the trees are similar anyway and the FO optimization loses little."""))

# ---------------------------------------------------------------- V
C.append(md(r"""
## IV. (Master) Direct minimization of a PAC-Bayesian C-bound

The PAC-Bayesian C-bound combines an upper bound on the Gibbs risk and a lower bound on the disagreement (union bound, $\delta/2$ each):
$$R(B_\rho)\leq 1-\frac{(1-2\bar r)^2}{1-2\underline d},\quad \bar r=\overline{\mathrm{kl}}^{-1}\Big(\rho^\top\hat L,\tfrac{\mathrm{KL}+\ln\frac{4\sqrt{n_1}}{\delta}}{n_1}\Big),\quad
\underline d=\underline{\mathrm{kl}}^{-1}\Big(\rho^\top\hat D\rho,\tfrac{2\mathrm{KL}+\ln\frac{4\sqrt{n_2}}{\delta}}{n_2}\Big).$$
Here is the function computing it.
"""))
C.append(demo(r"""
def cbound_pb(rho, pi, L, n1, D, n2, delta=0.05):
    KL = kl_div(rho, pi)
    r = kl_inv_upper(rho @ L, (KL + np.log(4 * np.sqrt(n1) / delta)) / n1)
    d = kl_inv_lower(rho @ D @ rho, (2 * KL + np.log(4 * np.sqrt(n2) / delta)) / n2)
    return 1.0 if r >= 0.5 else min(1.0, 1 - (1 - 2 * r)**2 / (1 - 2 * d))

for name, r in [("uniform", pi), ("FO", rho_fo), ("TND", rho_tnd)]:
    print(f"{name:8s} PAC-Bayesian C-bound {cbound_pb(r, pi, L, n1, D, n2):.3f}")
"""))
C.append(md(r"""
### Exercise 2

Minimize `cbound_pb` over $\rho=\mathrm{softmax}(\theta)$, starting from the uniform posterior, with `scipy.optimize.minimize(method="Powell")` or L-BFGS with numerical gradients (the function is not smooth everywhere, a derivative-free method is safer; limit the number of evaluations to keep the run under a minute).
Compare the certificate and the test risk of the vote with the three previous posteriors. Is the self-bounding C-bound learner a good compromise?
"""))
C.append(exercise(
    "Minimize the PAC-Bayesian C-bound over softmax(theta) from the uniform posterior (Powell,\nlimited evaluations); compare certificate and test risk with uniform / FO / TND.",
    r"""
obj = lambda th: cbound_pb(softmax(th), pi, L, n1, D, n2)
res = minimize(obj, np.log(pi), method="Powell", options={"maxfev": 4000, "xtol": 1e-3, "ftol": 1e-5})
rho_cb = softmax(res.x)
for name, r in [("uniform", pi), ("FO", rho_fo), ("TND", rho_tnd), ("C-bound", rho_cb)]:
    print(f"{name:8s} test MV {mv_risk(Vte, yte, r):.3f}  C-bound {cbound_pb(r, pi, L, n1, D, n2):.3f}  "
          f"TND {tnd_bound(r, pi, Lt, n2):.3f}  FO {fo_bound(r, pi, L, n1):.3f}  eff. #trees {1 / np.sum(r**2):.1f}")
"""))
C.append(answer(r"""The C-bound learner decreases its own certificate while keeping a diverse ensemble (the disagreement appears with a positive role in the objective), so its vote stays close to the uniform forest. Its certificate is not always better than the tandem one here because the C-bound pays two union-bounded estimates and $n_2$ is small; Viallard et al. (2021) use tighter joint C-bounds and stochastic gradient descent, which improves the result."""))
C.append(md(r"""
## Conclusion

Bound minimization is a principled way to learn the weights of a vote *and* to certify it. The order of the bound matters: first-order bounds lead to
concentrated posteriors and poor votes, second-order bounds (tandem, C-bound) preserve the diversity of the ensemble. This is the core of the project of this part of the course.
"""))

build_notebooks(C, "04_pacbayes_learning_votes_student.ipynb", "04_pacbayes_learning_votes_solution.ipynb")
