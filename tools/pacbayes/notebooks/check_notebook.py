# -*- coding: utf-8 -*-
"""
Standard check (same as tools/notebooks-interactifs/check_notebook.py):
    python3 check_notebook.py <student>.ipynb <solution>.ipynb
1. every code cell of the STUDENT notebook is syntactically valid;
2. the SOLUTION notebook runs end-to-end without any exception.
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
        print(f"[STUDENT] {path}: {len(errors)} cell(s) with a SyntaxError!")
        for i, err, src in errors:
            print(f"  - cell #{i}: {err}\n    >>> {src}")
        return False
    print(f"[STUDENT] {path}: OK")
    return True


def check_solution_execution(path, timeout=300):
    nb = nbformat.read(path, as_version=4)
    client = NotebookClient(nb, timeout=timeout, kernel_name="python3")
    try:
        client.execute()
    except Exception as e:
        print(f"[SOLUTION] {path}: EXECUTION FAILED -> {type(e).__name__}: {e}")
        return False
    n_fig = 0
    for cell in nb.cells:
        if cell.cell_type != "code":
            continue
        for out in cell.get("outputs", []):
            if out.get("output_type") == "error":
                print(f"[SOLUTION] {path}: error output")
                return False
            if out.get("output_type") in ("display_data", "execute_result"):
                if any(k.startswith("image/") for k in out.get("data", {})):
                    n_fig += 1
    executed = path.replace(".ipynb", "_executed.ipynb")
    nbformat.write(nb, executed)
    print(f"[SOLUTION] {path}: OK ({n_fig} figures) -> {executed}")
    return True


if __name__ == "__main__":
    ok1 = check_student_syntax(sys.argv[1])
    ok2 = check_solution_execution(sys.argv[2])
    sys.exit(0 if (ok1 and ok2) else 1)
