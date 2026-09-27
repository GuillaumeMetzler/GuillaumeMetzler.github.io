import re, nbformat as nbf
src = open("/home/claude/pacbayes/tp/tp_solutions.py").read()
chunks = re.split(r"^# %%", src, flags=re.M)[1:]
cells = []
for c in chunks:
    if c.startswith(" [markdown]"):
        body = "\n".join(l[2:] if l.startswith("# ") else l.lstrip("#") for l in c.split("\n")[1:]).strip()
        cells.append(("md", body))
    else:
        cells.append(("code", c.strip("\n")))
# index: find code cell after each md header
def code_after(key):
    for i,(t,b) in enumerate(cells):
        if t=="md" and key in b: return cells[i+1][1]
    raise KeyError(key)
imports = cells[1][1].replace('HERE = os.path.dirname', 'HERE = os.path.dirname').rstrip()
# notebooks live in notebooks/: add parent folder to paths
imports = imports.replace('for p in [HERE,', 'for p in [HERE, os.path.join(HERE, ".."), os.path.join(HERE, "..", "data"), os.path.join(HERE, "..", "..", "common"),')
imports = imports.replace('DATADIR = os.path.join(HERE, "data") if os.path.isdir(os.path.join(HERE, "data", "datasets")) else HERE',
 'DATADIR = next((d for d in [os.path.join(HERE, "data"), HERE, os.path.join(HERE, ".."), os.path.join(HERE, "..", "data")] if os.path.isdir(os.path.join(d, "datasets"))), HERE)')
C = {k: code_after(k) for k in ["## Part 1 ","## Part 2 ","## Part 4 ","## Part 5 ","## Part 6 ","## Part 7 ","## Part 8 ",
     "Extra part A","Extra part B","Extra part C","Extra part D","Extra part E"]}
def split_defs(code, fname):
    """return (helper code before def fname, def fname...)"""
    i = code.index(f"def {fname}(")
    return code[:i].strip("\n"), code[i:].strip("\n")
S = {
 1: ("Foundations: kl inversion, first forest certificates, forest size",
     "Parts 1.1 (setup) to 1.4", [
     ("Part 1.2 -- Warm-up: inverting the kl and certifying one classifier", C["## Part 1 "], "part1()"),
     ("Parts 1.3 and 2.1 -- Certificates of a standard random forest (and learned weights, reused in Session 2)", C["## Part 2 "], "part2_3()"),
     ("Part 1.4 -- Number of trees and size of the bootstrap samples", C["Extra part A"], "partA()")]),
 2: ("Learning the weights: optimized certificates, direct minimization, diversity, model selection",
     "Parts 2.1 to 2.4", [
     ("Helpers from Session 1 (random forests with out-of-bag statistics)", C["## Part 2 "], None),
     ("Part 2.1 -- Learning the posterior by minimizing a certificate", "", "part2_3()"),
     ("Part 2.2 -- Direct minimization of the kl certificate by gradient descent", C["Extra part B"], "partB()"),
     ("Part 2.3 -- Strength versus diversity", C["## Part 5 "], "part5()"),
     ("Part 2.4 -- Self-bounding model selection versus cross-validation", C["## Part 6 "], "part6()")]),
 3: ("Beyond forests: Gibbs posteriors, hold-out, imbalance, boosting",
     "Parts 3.1 to 3.4", [
     ("Helpers from Session 1 (random forests with out-of-bag statistics)", C["## Part 2 "], None),
     ("Part 3.1 -- The Gibbs posterior on decision stumps (temperature)", C["## Part 4 "], "part4()"),
     ("Part 3.2 -- Hold-out certificate versus self-bounding certificate", C["Extra part C"], "partC()"),
     ("Part 3.3 -- Imbalanced datasets and a certificate on the balanced error", C["## Part 7 "], "part7()"),
     ("Part 3.4 -- Boosting", C["## Part 8 "], "part8()")]),
 4: ("PAC-Bayesian learning of linear classifiers",
     "Parts 4.1 to 4.4", [
     ("Part 4.1 -- PBGD and Monte Carlo certificates", C["Extra part D"], "partD()"),
     ("Part 4.2 -- Data-dependent Gaussian prior", C["Extra part E"], "partE()"),
     ("Parts 4.3 and 4.4 -- Synthesis and report", "", None)]),
}
for s,(title, parts, items) in S.items():
    nb = nbf.v4.new_notebook(); cs = nb.cells
    cs.append(nbf.v4.new_markdown_cell(
      f"# TP PAC-Bayes -- Session {s}: {title}\n\nSolution notebook for Session {s} (three hours, {parts} of the sheet "
      "`tp_pacbayes.pdf`). It reproduces the numbers, tables (written to `results/`) and figures (written to `figures/`) "
      "of the solution sheet `tp_pacbayes_solutions.pdf`.\n\nIt needs `pbtools.py`, `prepdata.py` and the folder `datasets/` "
      "of the course, either in this folder or in its parent folder. Each session notebook is self-contained: the helper "
      "functions it needs are redefined at the top."))
    cs.append(nbf.v4.new_code_cell(imports))
    for name, code, call in items:
        cs.append(nbf.v4.new_markdown_cell(f"## {name}"))
        if s == 4 and name.startswith("Parts 4.3"):
            cs.append(nbf.v4.new_markdown_cell(
              "Part 4.3 is a written synthesis (decision table comparing all the certificates met in the four sessions) "
              "and Part 4.4 is the report; see the solution sheet for a model answer. No code is needed."))
            continue
        if code: cs.append(nbf.v4.new_code_cell(code))
        if call: cs.append(nbf.v4.new_code_cell(f"t0 = time.time(); {call}; print(f'{{time.time() - t0:.0f}} s')"))
    nbf.write(nb, f"/home/claude/pacbayes/tp/notebooks/tp_session{s}_solutions.ipynb")
print("ok")
