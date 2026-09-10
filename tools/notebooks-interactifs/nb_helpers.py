# -*- coding: utf-8 -*-
"""
Helper partage pour generer, a partir d'UNE SEULE liste de cellules, deux
notebooks Jupyter par thematique :
  - une version "etudiant" ;
  - une version "corrige".

Usage dans un script build_nb_<slug>.py :

    from nb_helpers import md, demo, exercice, question, reponse, build_notebooks

    CELLS = [
        md("# Titre du notebook"),
        md("## 1. Rappels de cours\n\n..."),

        # --- Exercice a code libre : TOUJOURS precede d'un demo() analogue ---
        demo("# exemple travaille : ..."),
        md("### Exercice 1\n\nEnonce complet de ce que l'etudiant doit faire."),
        exercice(
            consigne="Chargez load_wine, separez train/test, entrainez un knn.",
            solution="X, y = load_wine(return_X_y=True)\n...",
        ),

        # --- Question d'observation : code deja ecrit, l'etudiant l'execute
        #     et interprete, pas de code a rendre ---
        demo("for k in [1, 5, 15, 50]:\n    ...\nplt.show()"),
        question("Que se passe-t-il quand k augmente ? Pourquoi ?"),
        reponse("Le biais augmente et la variance diminue : la frontiere "
                "devient de plus en plus lisse jusqu'a sous-apprendre."),
        ...
    ]

    build_notebooks(CELLS, "04_svm_etudiant.ipynb", "04_svm_corrige.ipynb")

Philosophie (v2, suite aux retours) :
- Les exercices de code sont a ecrire ENTIEREMENT par l'etudiant. La cellule
  etudiant ne contient que la consigne rappelee en commentaire -- ni squelette,
  ni `# TODO`, ni valeurs bidons. C'est pourquoi chaque `exercice(...)` doit
  etre precede, dans la liste CELLS, d'une cellule `demo(...)` qui traite un
  cas analogue (memes fonctions, structure de code comparable) : l'etudiant a
  un modele a suivre, jamais la solution elle-meme.
- Les questions d'observation (`question(...)`) portent sur du code deja
  fourni (une cellule `demo()` juste avant, eventuellement avec plusieurs
  configurations/hyperparametres) : l'etudiant l'execute, observe le
  comportement de l'algorithme, et repond par ecrit. Il n'y a pas de
  correction automatique ; `reponse(...)` fournit un element de reponse,
  visible uniquement dans le corrige.
"""
import nbformat as nbf


def md(text):
    """Cellule markdown (identique dans les deux notebooks)."""
    return {"kind": "markdown", "text": text}


def demo(code):
    """Cellule de code de demonstration/illustration, executable telle
    quelle : identique dans les deux notebooks. Sert aussi de modele
    lorsqu'elle precede un exercice a code libre."""
    return {"kind": "code", "code": code}


def exercice(consigne, solution):
    """Cellule d'exercice a code ENTIEREMENT libre.

    - consigne : rappel court (1 a 4 lignes) de ce qui est demande, depose en
      commentaire en tete de la cellule etudiant. Aucun code pre-rempli,
      aucun TODO, aucune valeur de secours : la cellule etudiant est
      volontairement quasi vide.
    - solution : code complet, correct, qui s'execute de bout en bout dans le
      corrige.

    Regle d'usage impérative : ne jamais placer un exercice() sans qu'une
    cellule demo() traitant un cas analogue le precede immediatement (a un
    encadrement pedagogique pres, cf. la cellule markdown d'enonce).
    """
    lignes = consigne.strip("\n").split("\n")
    stub = "\n".join(("# " + l) if l.strip() else "#" for l in lignes) + "\n"
    return {"kind": "exercice", "stub": stub, "solution": solution}


def question(text, n=None):
    """Cellule markdown 'question d'observation', dans l'esprit des
    notebooks deja en ligne sur le site (cf. DecisionTrees.ipynb) : porte sur
    la cellule demo() qui precede, pas de code a produire. Identique dans les
    deux versions."""
    label = "**Question%s :** " % (" " + str(n) if n else "")
    return md("$$ $$\n\n%s%s\n\n$$ $$" % (label, text.strip()))


def reponse(text):
    """Element de reponse a une question() : n'apparait QUE dans le corrige
    (la version etudiant doit etre completee par ecrit par l'etudiant lui
    meme, sans correction automatique)."""
    return {"kind": "reponse_corrige", "text": text}


_BADGE_STUDENT = (
    "> **Version étudiant** — les cellules d'exercice ne rappellent que la "
    "consigne : le code est à écrire entièrement par vous-même, sans "
    "squelette imposé. Un exemple travaillé sur un cas analogue précède "
    "toujours ce type d'exercice. Les cellules repérées par **Question** "
    "n'ont pas de correction automatique : exécutez le code fourni, "
    "observez, et répondez par écrit. La version corrigée est "
    "téléchargeable depuis la page du cours."
)
_BADGE_CORRIGE = (
    "> **Version corrigée** — ce notebook contient le code complet de tous "
    "les exercices, exécuté de bout en bout, ainsi qu'un élément de réponse "
    "pour chaque question d'observation. La version étudiant (à compléter "
    "soi-même) est téléchargeable depuis la page du cours."
)


def build_notebooks(cells, out_student, out_corrige):
    nb_student = nbf.v4.new_notebook()
    nb_corrige = nbf.v4.new_notebook()
    nb_student["cells"] = [nbf.v4.new_markdown_cell(_BADGE_STUDENT)]
    nb_corrige["cells"] = [nbf.v4.new_markdown_cell(_BADGE_CORRIGE)]

    for c in cells:
        if c["kind"] == "markdown":
            nb_student["cells"].append(nbf.v4.new_markdown_cell(c["text"]))
            nb_corrige["cells"].append(nbf.v4.new_markdown_cell(c["text"]))
        elif c["kind"] == "code":
            nb_student["cells"].append(nbf.v4.new_code_cell(c["code"]))
            nb_corrige["cells"].append(nbf.v4.new_code_cell(c["code"]))
        elif c["kind"] == "exercice":
            nb_student["cells"].append(nbf.v4.new_code_cell(c["stub"]))
            nb_corrige["cells"].append(nbf.v4.new_code_cell(c["solution"]))
        elif c["kind"] == "reponse_corrige":
            # Uniquement dans le corrige.
            nb_corrige["cells"].append(nbf.v4.new_markdown_cell(
                "*Éléments de réponse.* " + c["text"]
            ))
        else:
            raise ValueError("kind inconnu: %r" % (c["kind"],))

    meta = {
        "kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
        "language_info": {"name": "python", "pygments_lexer": "ipython3",
                           "codemirror_mode": {"name": "ipython", "version": 3}},
    }
    nb_student["metadata"] = dict(meta)
    nb_corrige["metadata"] = dict(meta)

    with open(out_student, "w", encoding="utf-8") as f:
        nbf.write(nb_student, f)
    with open(out_corrige, "w", encoding="utf-8") as f:
        nbf.write(nb_corrige, f)

    n_exo = sum(1 for c in cells if c["kind"] == "exercice")
    n_demo = sum(1 for c in cells if c["kind"] == "code")
    n_md = sum(1 for c in cells if c["kind"] == "markdown")
    n_q = sum(1 for c in cells if c["kind"] == "markdown" and "**Question" in c["text"])
    print(f"Ecrit {out_student} et {out_corrige} : {len(cells)} cellules "
          f"({n_md} markdown, {n_demo} demo, {n_exo} exercices libres, "
          f"{n_q} questions d'observation)")
