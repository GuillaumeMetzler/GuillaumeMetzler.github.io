# Project — Ensemble methods and PAC-Bayesian Learning

The subject is in `projet.pdf`.

## Contents

| Path | What it is |
|------|-----------|
| `projet.pdf` | the subject (Part 1: ensemble methods; Part 2: PAC-Bayesian bounds) |
| `code/benchkit.py` | the datasets of the course: `real_dataset(name)` returns `X`, `y` with labels in {-1,+1}; `REAL_SMALL` and `REAL_LARGE` list the available names; plus simple simulators and an evaluation helper `evaluate` |
| `code/pacbayes_tools.py` | Part 2, **complete code**: the three bounds (linear, McAllester, Seeger), the algorithms that minimize bounds A and B for stumps (categorical distributions) and linear classifiers (Gaussian distributions), and the functions `run_categorical` / `run_gaussian` that run everything for one dataset and one split |
| `common/tptools.py`, `data/` | dataset loader and datasets (do not modify) |

## Getting started

Requirements: Python 3, `numpy`, `scipy`, `scikit-learn`, `matplotlib`.

Keep your scripts and notebooks in `code/` (or add `code/` to `sys.path`), then:

```bash
cd code
python benchkit.py         # quick check of the datasets and of the evaluation helper
python pacbayes_tools.py   # Part 2 example on wdbc: compare with the "Expected values" box of the subject
```

```python
import benchkit as bk
X, y = bk.real_dataset("wdbc")
print(X.shape, bk.REAL_SMALL + bk.REAL_LARGE)

from pacbayes_tools import run_categorical, run_gaussian, show
show("wdbc, stumps", run_categorical(X, y, seed=0))
```

The features are **not** standardized: standardize after splitting, using the training part only.
