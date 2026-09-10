# -*- coding: utf-8 -*-
"""
Gabarit pour generer la banque de questions d'un nouveau cours (a dupliquer et
adapter, voir README.md a la racine de ce dossier).

Utilisation :
  1. Copier ce fichier (ex. build_algebre.py) a cote d'un fichier data_<cat>.py
     par categorie (voir data_example.py ci-contre pour le modele d'un tel
     fichier).
  2. Completer CATEGORIES ci-dessous (slug + libelle + fonction get_*()).
  3. Lancer :  python3 build_<cours>.py
     -> produit <cours>_exercices.json et <cours>_exercices_data.js
  4. (Optionnel mais recommande) Valider le LaTeX genere :
       npm install katex --no-save          # une seule fois
       node validate_latex.js <cours>_exercices.json
  5. Copier <cours>_exercices_data.js vers assets/js/data/<cours>_exercices.js
     sur le site, et creer courses/<cours>_exercices.html a partir du gabarit
     page_template.html (voir README.md).
"""
import json
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# from data_espaces_vectoriels import get_espaces_vectoriels
# from data_matrices import get_matrices
# ... un import par categorie ...

NOM_DU_COURS = "algebre"  # utilise pour nommer les fichiers de sortie

CATEGORIES = [
    # {"slug": "espaces-vectoriels", "label": "Espaces vectoriels & applications linéaires", "getter": get_espaces_vectoriels},
    # {"slug": "matrices", "label": "Matrices & calcul matriciel", "getter": get_matrices},
    # ... une entree par categorie, dans l'ordre d'affichage des onglets ...
]

if not CATEGORIES:
    raise SystemExit(
        "Complete la liste CATEGORIES ci-dessus (et les imports en haut du "
        "fichier) avant de lancer ce script - voir data_example.py pour le "
        "modele d'un fichier data_<categorie>.py."
    )

all_questions = []
for cat in CATEGORIES:
    all_questions.extend(cat["getter"]())

# --- validations de coherence (a garder telles quelles) ---
ids = [q["id"] for q in all_questions]
assert len(ids) == len(set(ids)), "IDs dupliques detectes !"
for q in all_questions:
    assert q["type"] in ("qcm", "num")
    assert "q" in q and len(q["q"]) > 3
    if q["type"] == "qcm":
        assert len(q["opts"]) == 4, q["id"]
        letters = {o["key"] for o in q["opts"]}
        assert letters == {"a", "b", "c", "d"}, q["id"]
        assert q["ans"] in letters, q["id"]
        texts = [o["text"] for o in q["opts"]]
        assert len(set(texts)) == 4, f"options dupliquees dans {q['id']}"
    else:
        assert isinstance(q["ans"], (int, float)), q["id"]
        assert "tol" in q

cat_counts = {}
for q in all_questions:
    cat_counts[q["cat"]] = cat_counts.get(q["cat"], 0) + 1
print("Repartition par categorie:", cat_counts)
print("Total:", len(all_questions))

categories_meta = [{"slug": c["slug"], "label": c["label"]} for c in CATEGORIES]

output = {"categories": categories_meta, "questions": all_questions}
with open(f"{NOM_DU_COURS}_exercices.json", "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False, indent=1)

js_content = (
    "/* Banque d'exercices interactifs - genere automatiquement, ne pas editer\n"
    "   a la main : regenerer depuis ce script. NB: on utilise 'var' (et non\n"
    "   'const') pour que ces variables soient bien attachees a l'objet window\n"
    "   et donc lisibles depuis exercises.js charge dans un <script> separe. */\n"
    "var EXERCISES_CATEGORIES = " + json.dumps(categories_meta, ensure_ascii=False, indent=1) + ";\n"
    "var EXERCISES_DATA = " + json.dumps(all_questions, ensure_ascii=False, indent=1) + ";\n"
)
with open(f"{NOM_DU_COURS}_exercices_data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Fichiers ecrits :", f"{NOM_DU_COURS}_exercices.json", "et", f"{NOM_DU_COURS}_exercices_data.js")
