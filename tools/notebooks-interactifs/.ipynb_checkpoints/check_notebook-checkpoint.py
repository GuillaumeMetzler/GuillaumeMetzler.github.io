# -*- coding: utf-8 -*-
"""
Verification standard a lancer sur CHAQUE paire de notebooks generee :

    python3 check_notebook.py <slug>_etudiant.ipynb <slug>_corrige.ipynb

Fait deux choses :
1. Sur le notebook ETUDIANT : verifie que CHAQUE cellule de code est
   syntaxiquement valide (ast.parse) -- un stub d'exercice incomplet ne doit
   jamais faire planter un "Run All" avec une SyntaxError.
2. Sur le notebook CORRIGE : l'execute integralement de bout en bout
   (kernel python3, timeout large) et verifie qu'AUCUNE cellule ne leve
   d'exception. Compte aussi le nombre de figures matplotlib produites.

Sort avec un code de retour != 0 et un message clair en cas de probleme.
"""
import sys
import ast
import nbformat
from nbclient import NotebookClient


def check_student_syntax(path):
    nb = nbformat.read(path, as_version=4)
    errors = []
    for i, cell in enumerate(nb.cells):
        if cell.cell_type != "code":
            continue
        try:
            ast.parse(cell.source)
        except SyntaxError as e:
            errors.append((i, str(e), cell.source[:200]))
    if errors:
        print(f"[ETUDIANT] {path}: {len(errors)} cellule(s) avec une SyntaxError !")
        for i, err, src in errors:
            print(f"  - cellule #{i}: {err}\n    >>> {src}")
        return False
    print(f"[ETUDIANT] {path}: OK ({sum(1 for c in nb.cells if c.cell_type=='code')} cellules de code, toutes syntaxiquement valides)")
    return True


def check_corrige_execution(path, timeout=180):
    nb = nbformat.read(path, as_version=4)
    client = NotebookClient(nb, timeout=timeout, kernel_name="python3")
    try:
        client.execute()
    except Exception as e:
        print(f"[CORRIGE] {path}: ECHEC A L'EXECUTION -> {type(e).__name__}: {e}")
        return False

    n_outputs_with_error = 0
    n_figures = 0
    for cell in nb.cells:
        if cell.cell_type != "code":
            continue
        for out in cell.get("outputs", []):
            if out.get("output_type") == "error":
                n_outputs_with_error += 1
            if out.get("output_type") in ("display_data", "execute_result"):
                data = out.get("data", {})
                if any(k.startswith("image/") for k in data):
                    n_figures += 1

    if n_outputs_with_error:
        print(f"[CORRIGE] {path}: {n_outputs_with_error} cellule(s) en erreur malgre l'execution 'reussie' !")
        return False

    # Ecrit le notebook execute (avec ses sorties) pour inspection/relecture.
    executed_path = path.replace(".ipynb", "_executed.ipynb")
    nbformat.write(nb, executed_path)
    print(f"[CORRIGE] {path}: OK, execution complete sans erreur ({n_figures} figure(s) produite(s)). "
          f"Version executee -> {executed_path}")
    return True


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 check_notebook.py <etudiant>.ipynb <corrige>.ipynb")
        sys.exit(2)
    student_path, corrige_path = sys.argv[1], sys.argv[2]
    ok1 = check_student_syntax(student_path)
    ok2 = check_corrige_execution(corrige_path)
    sys.exit(0 if (ok1 and ok2) else 1)
