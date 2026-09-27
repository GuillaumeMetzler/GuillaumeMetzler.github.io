# Inserts the "Apprentissage PAC-Bayes" section in courses/ensemblemethods.html
# (before the grades widget). Idempotent. Run from the root of the site:
#     python3 tools/pacbayes/add_section.py
import io, os
page = "courses/ensemblemethods.html"
sec = io.open(os.path.join(os.path.dirname(__file__), "pacbayes_section.html"), encoding="utf-8").read()
html = io.open(page, encoding="utf-8").read()
if 'id="pacbayes"' in html:
    print("section already present"); raise SystemExit
anchor = '\t\t\t\t\t<section class="stats-widget"'
assert anchor in html, "anchor not found"
html = html.replace(anchor, sec + anchor, 1)
io.open(page, "w", encoding="utf-8").write(html)
print("section added to", page)
