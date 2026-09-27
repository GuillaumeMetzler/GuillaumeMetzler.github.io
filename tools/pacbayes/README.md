# PAC-Bayes part of "Ensemble Methods" — sources

Published files: `courses/contents/ensemblemethods/pacbayes/` (PDFs, `pbtools.py`, notebooks).

- `poly/` — lecture notes (`poly_pacbayes.tex`, one file per chapter). Figures: `python3 make_figures.py`
  (uses `common/pbtools.py`), then `latexmk -pdf poly_pacbayes.tex`.
- `td/` — tutorial sheet. `td_pacbayes.tex` = student version; `td_pacbayes_solutions.tex` = same source with solutions.
- `tp/`, `projet/` — practical session and M2 project (bibliography: `common/pacbayes.bib`).
- `common/` — shared style (`pbstyle.sty`, header `sheethead.tex`), bibliography, `pbtools.py`.
- `notebooks/` — one `build_nb_XX_*.py` per notebook (English variant of `tools/notebooks-interactifs`:
  `nb_helpers_en.py`, same API with `exercise`/`answer`). `python3 build_nb_XX.py` then
  `python3 check_notebook.py XX_student.ipynb XX_solution.ipynb`.
- `pacbayes_section.html` + `add_section.py` — the block inserted in `courses/ensemblemethods.html`.

Solutions (notebooks, TD) are linked but commented out in the HTML, as for the other courses.
