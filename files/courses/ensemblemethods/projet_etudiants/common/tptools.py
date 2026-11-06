"""Small toolbox shared by the five practical sessions of
"Statistical Supervised Machine Learning" (Master MIASHS & MALIA).

    load(name)              datasets of the course, labels in {-1,+1}
    split3(X, y, seed)      stratified train / validation / test split
    kl(q, p)                binary kl divergence (vectorized)
    kl_inv_upper(q, eps)    sup{p >= q : kl(q||p) <= eps} (vectorized bisection)
    hoeffding_width(n, d)   sqrt(ln(1/delta) / (2n))
    show_table(rows, hdr)   display a table in a notebook (used by the solution notebooks)
"""
import os
import sys
import numpy as np
from sklearn.model_selection import train_test_split

DATADIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data")
if DATADIR not in sys.path:
    sys.path.insert(0, DATADIR)


def load(name):
    """Dataset of the course ('wdbc', 'pima', 'australian', 'spambase', ...), labels in {-1,+1}.
    The features are NOT standardized: this must be done after the split, on the training set only."""
    from prepdata import data_recovery
    cwd = os.getcwd(); os.chdir(DATADIR)
    try:
        X, y = data_recovery(name)
    finally:
        os.chdir(cwd)
    return np.asarray(X, dtype=float), np.where(np.asarray(y) > 0, 1, -1)


def split3(X, y, seed, sizes=(0.6, 0.2, 0.2)):
    """Stratified train / validation / test split."""
    Xtr, Xr, ytr, yr = train_test_split(X, y, train_size=sizes[0], stratify=y, random_state=seed)
    Xva, Xte, yva, yte = train_test_split(Xr, yr, test_size=sizes[2] / (sizes[1] + sizes[2]),
                                          stratify=yr, random_state=seed)
    return Xtr, ytr, Xva, yva, Xte, yte


def kl(q, p):
    """Binary kl divergence kl(q||p) = q ln(q/p) + (1-q) ln((1-q)/(1-p)), with 0 ln 0 = 0."""
    q = np.clip(np.asarray(q, dtype=float), 0, 1); p = np.clip(np.asarray(p, dtype=float), 1e-15, 1 - 1e-15)
    with np.errstate(divide="ignore", invalid="ignore"):
        a = np.where(q > 0, q * np.log(q / p), 0.0)
        b = np.where(q < 1, (1 - q) * np.log((1 - q) / (1 - p)), 0.0)
    return a + b


def kl_inv_upper(q, eps, n_iter=60):
    """Upper inverse of the kl: sup{p in [q,1] : kl(q||p) <= eps}, by bisection (vectorized in q and eps)."""
    q, eps = np.broadcast_arrays(np.asarray(q, dtype=float), np.asarray(eps, dtype=float))
    lo, hi = q.copy(), np.ones_like(q)
    for _ in range(n_iter):
        mid = 0.5 * (lo + hi)
        bad = kl(q, mid) > eps
        hi = np.where(bad, mid, hi); lo = np.where(bad, lo, mid)
    return hi if hi.ndim else float(hi)


def hoeffding_width(n, delta):
    return np.sqrt(np.log(1 / delta) / (2 * n))


# ----------------------------------------------------------------------------------------------------------------------
# Display helper of the solution notebooks: a table given as rows 'a & b & c' (math between $) is shown as a
# markdown table (rendered by Jupyter, MathJax for the formulas).
# ----------------------------------------------------------------------------------------------------------------------
import re as _re

_MACROS = [(r"\RD", r"R_{\mathcal{D}}"), (r"\RS", r"\widehat{R}_S"), (r"\GQ", r"G_Q"), (r"\BQ", r"B_Q"),
           (r"\KL", r"\operatorname{KL}"), (r"\klup", r"\overline{\operatorname{kl}}^{-1}"), (r"\kl", r"\operatorname{kl}"),
           (r"\Hcal", r"\mathcal{H}"), (r"\E", r"\mathbb{E}"), (r"\P", r"\mathbb{P}"), (r"\D", r"\mathcal{D}"),
           (r"\R", r"\mathbb{R}"), (r"\ind", r"\mathbb{1}")]


def _math(m):
    s = m.group(1)
    for a, b in _MACROS:
        s = _re.sub(_re.escape(a) + r"(?![a-zA-Z])", lambda _: b, s)
    s = s.replace(r"\|", r"\Vert ").replace("|", r"\vert ")
    return "$" + s + "$"


def latex_to_md(cell):
    """Convert one cell of a LaTeX table into markdown (math kept for MathJax)."""
    s = cell.strip()
    s = _re.sub(r"\\code\{([^}]*)\}", r"`\1`", s)
    s = _re.sub(r"\\textbf\{([^}]*)\}", r"**\1**", s)
    s = _re.sub(r"\\emph\{([^}]*)\}", r"*\1*", s)
    s = _re.sub(r"\$([^$]*)\$", _math, s)
    s = s.replace(r"\ ", " ").replace("--", "–").replace("~", " ")
    return s


def _split_row(row):
    row = row.strip()
    if row.endswith(r"\\"):
        row = row[:-2]
    cells = []
    for c in row.split("&"):
        m = _re.match(r"\s*\\multicolumn\{(\d+)\}\{[^}]*\}\{(.*)\}\s*$", c)
        if m:
            cells += [m.group(2)] + [""] * (int(m.group(1)) - 1)
        else:
            cells.append(c)
    return [latex_to_md(c) for c in cells]


def show_table(rows, header=None):
    """Display LaTeX table rows (list of 'a & b & c \\\\') as a markdown table in the notebook."""
    from IPython.display import display, Markdown
    body = []
    for r in rows:
        r = r.strip()
        for sep in (r"\midrule", "---"):
            if r.startswith(sep):
                r = r[len(sep):].strip()
        if not r:
            continue
        body.append(_split_row(r))
    ncol = max(len(b) for b in body)
    if header is None or len(header) != ncol:
        header = [""] * ncol
    lines = ["| " + " | ".join(header) + " |", "|" + "|".join([":---:"] * ncol) + "|"]
    lines += ["| " + " | ".join(b + [""] * (ncol - len(b))) + " |" for b in body]
    display(Markdown("\n".join(lines)))
