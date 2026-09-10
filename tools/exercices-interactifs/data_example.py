# -*- coding: utf-8 -*-
"""
Modele d'un fichier "data_<categorie>.py" : une fonction get_xxx() qui renvoie
la liste des questions d'UNE categorie/theme, ecrite avec deux petits helpers
qcm() / num(). Copier ce fichier (ex. data_espaces_vectoriels.py), l'adapter,
puis l'importer et le referencer dans build_<cours>.py (voir build_template.py
et le README.md a la racine de ce dossier).

Format d'une question (pour reference - les helpers ci-dessous le construisent
pour vous) :
  {
    "type": "qcm" | "num",
    "q": "enonce, en HTML + LaTeX ( \\( ... \\) pour l'inline, \\[ ... \\] pour
          l'affichage en bloc ) - ecrire le LaTeX directement, pas besoin de
          passer par latex_conv.py pour du contenu neuf",
    "opts": [{"key": "a", "text": "..."}, ...]   # qcm uniquement, exactement 4
    "ans": "a" (qcm) ou un nombre (num),
    "ansText": "texte de la reponse affichee en cas d'erreur (accepte du LaTeX)",
    "tol": 0.01,       # num uniquement : tolerance acceptee sur la valeur saisie
    "img": "../images/exercices/mon_graphique.png",   # optionnel
    "imgAlt": "description de l'image pour l'accessibilite",  # optionnel
  }
"""


def get_exemple():
    Q = []

    def qcm(qtext, options, correct_index, img=None, imgAlt=None):
        letters = "abcd"
        opts = [{"key": letters[i], "text": o} for i, o in enumerate(options)]
        item = {"type": "qcm", "q": qtext, "opts": opts,
                "ans": letters[correct_index], "ansText": options[correct_index]}
        if img:
            item["img"] = img
            item["imgAlt"] = imgAlt or ""
        Q.append(item)

    def num(qtext, answer, ansText=None, tol=0.01, img=None, imgAlt=None):
        item = {"type": "num", "q": qtext, "ans": answer,
                "ansText": ansText if ansText is not None else str(answer), "tol": tol}
        if img:
            item["img"] = img
            item["imgAlt"] = imgAlt or ""
        Q.append(item)

    # --- questions de cours (QCM) ---
    qcm(r"Un \(K\)-espace vectoriel \(E\) est muni de deux lois : une loi interne "
        r"\(+\) et une loi externe \(\cdot\). Pour que \(E\) en soit un, \((E,+)\) doit être :",
        ["un groupe abélien", "un anneau", "un simple ensemble fini", "une famille libre"], 0)

    # --- questions de calcul (valeur numerique) ---
    num(r"Calculer le déterminant de \(A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}\).", 6)

    # --- question illustree par un graphique (optionnel) ---
    # qcm(r"D'après le graphique ci-dessous, ...", ["...", "...", "...", "..."], 0,
    #     img="../images/exercices/mon_fichier.png", imgAlt="description courte")

    # Le suffixe -NN de l'id doit rester unique DANS le fichier ; le prefixe
    # (ici "exemple") doit correspondre au "slug" utilise dans build_<cours>.py.
    for i, item in enumerate(Q, start=1):
        item["id"] = f"exemple-{i:02d}"
        item["cat"] = "exemple"
    return Q
