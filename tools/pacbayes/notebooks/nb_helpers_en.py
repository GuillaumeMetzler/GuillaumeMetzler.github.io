# -*- coding: utf-8 -*-
"""
English variant of nb_helpers.py (same API v2), used for the courses taught
in English (e.g. Ensemble Methods -- PAC-Bayesian Learning, M2 MALIA).

From ONE list of cells, build two notebooks:
  - a "student" version: exercise cells only contain the instruction as a
    comment (no skeleton, no TODO), observation questions have no answer;
  - a "solution" version: complete, executed code for every exercise and
    answer elements for every observation question.

    from nb_helpers_en import md, demo, exercise, question, answer, build_notebooks

Rules (see STYLE_GUIDE.md): every exercise() must be preceded by a demo()
treating an analogous case; every question() follows a demo() whose output
(plot / scores) the student has to interpret.
"""
import nbformat as nbf


def md(text):
    """Markdown cell (identical in both notebooks)."""
    return {"kind": "markdown", "text": text}


def demo(code):
    """Demonstration code cell, runnable as is (identical in both notebooks)."""
    return {"kind": "code", "code": code}


def exercise(instruction, solution):
    """Free-coding exercise: the student cell only contains the instruction
    as a comment; the solution cell contains the full code."""
    lines = instruction.strip("\n").split("\n")
    stub = "\n".join(("# " + l) if l.strip() else "#" for l in lines) + "\n"
    return {"kind": "exercice", "stub": stub, "solution": solution}


def question(text, n=None):
    """Observation question about the demo() cell right above."""
    label = "**Question%s:** " % (" " + str(n) if n else "")
    return md("$$ $$\n\n%s%s\n\n$$ $$" % (label, text.strip()))


def answer(text):
    """Answer elements, only in the solution notebook."""
    return {"kind": "reponse_corrige", "text": text}


_BADGE_STUDENT = (
    "> **Student version** -- exercise cells only recall the instruction: "
    "you write the code yourself, without any imposed skeleton. A worked "
    "example on an analogous case always precedes this kind of exercise. "
    "Cells marked **Question** have no automatic correction: run the code, "
    "observe, and answer in writing. The solution notebook is available on "
    "the course webpage."
)
_BADGE_SOLUTION = (
    "> **Solution version** -- this notebook contains the complete code of "
    "all exercises, executed from top to bottom, and answer elements for each "
    "observation question. The student version is available on the course "
    "webpage."
)


def build_notebooks(cells, out_student, out_solution):
    nb_s = nbf.v4.new_notebook()
    nb_c = nbf.v4.new_notebook()
    nb_s["cells"] = [nbf.v4.new_markdown_cell(_BADGE_STUDENT)]
    nb_c["cells"] = [nbf.v4.new_markdown_cell(_BADGE_SOLUTION)]
    for c in cells:
        if c["kind"] == "markdown":
            nb_s["cells"].append(nbf.v4.new_markdown_cell(c["text"]))
            nb_c["cells"].append(nbf.v4.new_markdown_cell(c["text"]))
        elif c["kind"] == "code":
            nb_s["cells"].append(nbf.v4.new_code_cell(c["code"].strip("\n")))
            nb_c["cells"].append(nbf.v4.new_code_cell(c["code"].strip("\n")))
        elif c["kind"] == "exercice":
            nb_s["cells"].append(nbf.v4.new_code_cell(c["stub"]))
            nb_c["cells"].append(nbf.v4.new_code_cell(c["solution"].strip("\n")))
        elif c["kind"] == "reponse_corrige":
            nb_c["cells"].append(nbf.v4.new_markdown_cell("*Answer elements.* " + c["text"].strip()))
        else:
            raise ValueError("unknown kind: %r" % (c["kind"],))
    meta = {
        "kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
        "language_info": {"name": "python", "pygments_lexer": "ipython3",
                          "codemirror_mode": {"name": "ipython", "version": 3}},
    }
    nb_s["metadata"] = dict(meta)
    nb_c["metadata"] = dict(meta)
    with open(out_student, "w", encoding="utf-8") as f:
        nbf.write(nb_s, f)
    with open(out_solution, "w", encoding="utf-8") as f:
        nbf.write(nb_c, f)
    n_ex = sum(1 for c in cells if c["kind"] == "exercice")
    n_q = sum(1 for c in cells if c["kind"] == "markdown" and "**Question" in c["text"])
    print(f"Wrote {out_student} and {out_solution}: {len(cells)} cells, "
          f"{n_ex} free exercises, {n_q} observation questions")
