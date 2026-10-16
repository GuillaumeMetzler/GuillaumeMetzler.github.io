# Practical sessions -- "Statistical Supervised Machine Learning" (Master MIASHS & MALIA)

Five practical sessions of three hours. The first one sets up the experimental protocol used in all the others and opens
the programme of the course; the next two are devoted to ensemble methods, the last two to PAC-Bayes. All the sheets use
the template of the lecture notes (`polystyle.sty` + `usercommands.tex`, same title block as the notes). Section numbers
refer to the lecture notes.

| # | Folder | Theme | Sections |
|---|--------|-------|----------|
| 1 | `tp1_protocol/` | **An experimental protocol.** Empirical vs. true risk (synthetic problem with known Bayes risk), normalization, hyperparameter search, hold-out vs. cross-validation, complete protocol and optimism of the best CV score, on Gaussian-kernel SVMs and decision trees. Opening: a vote of bootstrapped trees; a first test-set bound and the price of selection | 5, 6, 7.1, 8.3, 8.7, 11.3--11.5, (10.2, 1.4, 6.2) |
| 2 | `tp2_bagging/` | **Bagging and random forests.** Instability and bias--variance of trees, bagging from scratch, out-of-bag error, what bagging reduces (stable vs. unstable models), random forests and the accuracy--diversity trade-off; the forest of the running example of Part IV (Gibbs risk, joint error, disagreement) | 8.7, 10.1, 10.2, (12, 15.3, 15.4) |
| 3 | `tp3_boosting/` | **Boosting.** Weighted stumps, AdaBoost from scratch with three short proofs, gradient boosting from scratch, comparison of all the methods, margins, AdaBoost as a weighted majority vote, label noise | 10.2, 10.3, (15.6) |
| 4 | `tp4_pacbayes_intro/` | **From an error on a sample to a PAC-Bayesian guarantee.** Test-set and kl bounds of a fixed classifier (bisection), union bound, Occam's bound and the prior, KL divergence, the PAC-Bayesian bound with parameter $\lambda$ (and why $\lambda$ must be fixed), McAllester's and Seeger's bounds, Gibbs posterior, coverage checked by simulation | 13, 14 |
| 5 | `tp5_pacbayes_votes/` | **PAC-Bayes for majority votes: certify, then learn.** First-order bound, Condorcet, joint error and disagreement, tandem bound, out-of-bag certificates of a random forest (no test set), learning the weights of the forest: Gibbs posterior vs. the self-bounding tandem algorithm derived in Section 17 (Algorithm 13) | 15, 16, 17 |

Each session ends with a part marked (*) containing the difficult questions.

## Files of each session

- `tpX.pdf` -- sheet for the students; `tpX.tex` -- its LaTeX source.
- `tpX_starter.py` -- starter file for the students (data generators, skeletons of the functions to write).
- `tpX_solutions.ipynb` -- **the solutions**, as a notebook only: for each part, the statement, the code, then the
  detailed solutions with the tables and figures produced by the code, displayed directly in the notebook. It is
  delivered already executed; to run it again, open it from its own folder (it uses `../common` and `../data`) and run
  all the cells (from a few seconds to two minutes; numpy / scipy / scikit-learn / matplotlib).

## Common files

- `common/polystyle.sty`, `common/usercommands.tex`, `common/logos/` -- style of the lecture notes (unchanged copies).
- `common/tpsetup.tex` -- adaptation to the sheets: title block identical to the title page of the notes, `sessionbox`,
  `tip` boxes, `\tppart`, `\hard`, `\code`.
- `common/tptools.py` -- helpers shared by the notebooks: `load(name)` (datasets of the course, labels in {-1,+1}),
  `split3`, `kl`, `kl_inv_upper`, `hoeffding_width`, `show_table`.
- `common/pbtools.py` -- the PAC-Bayes toolbox of the course (bounds for majority votes, their optimizers, and Algorithm 13 `tandem_fixed_point`; TP 5).
- `data/prepdata.py` and `data/datasets/` -- loading script and datasets of the course.

## Rebuilding the sheets

```
cd tp1_protocol
pdflatex tp1.tex && pdflatex tp1.tex
```

The sheets compile both from their own folder and from the root of the project, which is what Overleaf does: upload
the zip, then choose `tp1_protocol/tp1.tex` in Menu > Main document.
