# -*- coding: utf-8 -*-
"""
Convertisseur : texte "unicode maison" (exposants/indices unicode, symboles
mathematiques unicode, balises <em>/<sub>/<sup>) -> texte HTML+LaTeX pret a
etre rendu par KaTeX (delimiteurs \\( ... \\) ).

Strategie :
1) Passe caractere/balise : conversion sure (jamais ambigue en francais) des
   exposants/indices unicode, des balises <em>/<sub>/<sup>, des symboles
   mathematiques unicode, de racine carree, des noms de fonctions usuelles.
2) Passe mot-a-mot : on repere les "tokens" a caractere mathematique
   (contiennent un chiffre, un symbole LaTeX, une parenthese, ou sont une
   simple lettre isolee = variable) et on les regroupe en un seul bloc
   \\( ... \\), en laissant le francais "en clair".
"""
import re

SUPER = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    'ⁿ': 'n', 'ⁱ': 'i', 'ᵏ': 'k', 'ᵅ': '\\alpha', 'ᵝ': '\\beta', 'ᵞ': '\\gamma',
    '⁺': '+', '⁻': '-', '⁽': '(', '⁾': ')', 'ᵇ': 'b', 'ˣ': 'x', 'ᶜ': 'c',
}
SUB = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
    'ₙ': 'n', 'ₖ': 'k', 'ᵢ': 'i', '₊': '+', '₋': '-', 'ₐ': 'a', '₌': '=',
}
SYM = {
    '→': '\\to', '∈': '\\in', '⊂': '\\subset', '≤': '\\le', '≥': '\\ge', '±': '\\pm',
    '×': '\\times', '÷': '\\div', 'π': '\\pi', 'α': '\\alpha', 'β': '\\beta', 'γ': '\\gamma',
    'ε': '\\varepsilon', 'λ': '\\lambda', 'η': '\\eta', 'φ': '\\varphi', 'μ': '\\mu',
    '∞': '\\infty', '∼': '\\sim', '∘': '\\circ', '⟹': '\\Rightarrow', '≠': '\\neq',
    '∀': '\\forall', '∃': '\\exists', '⋆': '{}^{\\star}', '∅': '\\emptyset',
    '∫': '\\int', 'Σ': '\\sum', '′': "'", '″': "''", '‴': "'''",
    '−': '-', '↦': '\\mapsto', '·': '\\cdot', '≈': '\\approx',
}

_SUPER_CLASS = '[' + ''.join(re.escape(c) for c in SUPER) + ']+'
_SUB_CLASS = '[' + ''.join(re.escape(c) for c in SUB) + ']+'


def _join_run(chars, mapping):
    # Insere un espace apres chaque commande LaTeX multi-lettres (\gamma, \alpha...)
    # pour eviter qu'elle ne fusionne avec le caractere suivant (ex: \gamma + n
    # ne doit pas devenir la commande inexistante \gamman).
    parts = []
    for c in chars:
        v = mapping[c]
        if v.startswith('\\') and len(v) > 2:
            v = v + ' '
        parts.append(v)
    return ''.join(parts)


def _repl_super(m):
    return '^{' + _join_run(m.group(0), SUPER) + '}'


def _repl_sub(m):
    return '_{' + _join_run(m.group(0), SUB) + '}'


def _convert_sqrt(s):
    out = []
    i = 0
    while i < len(s):
        if s[i] == '√':
            if i + 1 < len(s) and s[i + 1] == '(':
                depth = 0
                j = i + 1
                while j < len(s):
                    if s[j] == '(':
                        depth += 1
                    elif s[j] == ')':
                        depth -= 1
                        if depth == 0:
                            break
                    j += 1
                inner = s[i + 2:j]
                out.append('\\sqrt{' + inner + '}')
                i = j + 1
                continue
            elif i + 1 < len(s) and s[i + 1] == '{':
                # une paire { ... } suit deja (ex: produite par une conversion
                # d'indice/exposant) : \sqrt{...} est directement valide.
                out.append('\\sqrt')
                i += 1
                continue
            elif i + 1 < len(s) and s[i + 1] == '\\':
                # commande LaTeX seule juste apres (ex: √\pi) : on consomme la
                # commande entiere et on l'entoure d'accolades.
                j = i + 2
                while j < len(s) and s[j].isalpha():
                    j += 1
                out.append('\\sqrt{' + s[i + 1:j] + '}')
                i = j
                continue
            elif i + 1 < len(s) and (s[i + 1].isalnum()):
                # un seul caractere alphanumerique suit (ex: √x, √2) : on
                # l'entoure d'accolades pour eviter un accolement du type
                # "\sqrtx".
                out.append('\\sqrt{' + s[i + 1] + '}')
                i += 2
                continue
            else:
                out.append('\\sqrt')
                i += 1
                continue
        out.append(s[i])
        i += 1
    return ''.join(out)


FUNC_RE = re.compile(r'\b(ln|exp|cos|sin|tan|lim|sup|inf|log)(?=[\(_{])')
CHSH_RE = re.compile(r'\b(ch|sh)(?=\()')


def _char_pass(s):
    # balises HTML de mise en forme mathematique -> LaTeX
    s = re.sub(r'<sub>(.*?)</sub>', lambda m: '_{' + m.group(1) + '}', s)
    s = re.sub(r'<sup>(.*?)</sup>', lambda m: '^{' + m.group(1) + '}', s)
    s = re.sub(r'<em>(.*?)</em>', lambda m: m.group(1), s)
    # exposants / indices unicode
    s = re.sub(_SUPER_CLASS, _repl_super, s)
    s = re.sub(_SUB_CLASS, _repl_sub, s)
    # racine carree
    s = _convert_sqrt(s)
    # symboles (les commandes LaTeX multi-lettres sont entourees d'espaces pour
    # eviter qu'elles ne fusionnent avec une lettre collee juste apres, ex: "x·eˣ")
    for k, v in SYM.items():
        if v.startswith('\\') and len(v) > 2:
            v = ' ' + v + ' '
        s = s.replace(k, v)
    # fonctions usuelles
    s = FUNC_RE.sub(lambda m: '\\' + m.group(1), s)
    s = CHSH_RE.sub(lambda m: '\\operatorname{' + m.group(1) + '}', s)
    return s


TRAIL_PUNCT = '.;:?!'
QUOTE_LEAD = '«“'
QUOTE_TRAIL = '»”'
BRACKET_LEAD = '(['
BRACKET_TRAIL = ')]'


def _split_token(tok):
    """Decoupe un token en (guillemet_gauche, parenthese(s)_gauche, coeur,
    parenthese(s)_droite, ponctuation_finale).

    Les guillemets et la ponctuation de fin de phrase (., ;, :, ?, !) sont
    toujours sortis du bloc LaTeX. Les parentheses/crochets, en revanche, ne
    sont retires que pour LE TEST de "mathite" du coeur (une parenthese
    ouvrante collee a un mot francais, ex. "(c'est-à-dire", ne doit pas faire
    passer tout le mot en LaTeX) : si le coeur s'avere mathematique, on les
    rattache au bloc LaTeX (voir _word_pass) pour eviter de fragmenter une
    expression comme "(3n + 1)" en plusieurs blocs \\( \\) separes, ce qui
    produirait des espacements incorrects par rapport a un vrai rendu LaTeX.
    """
    qlead = ''
    while tok and tok[0] in QUOTE_LEAD:
        qlead += tok[0]
        tok = tok[1:]
    tpunct = ''
    while tok and tok[-1] in TRAIL_PUNCT + QUOTE_TRAIL:
        tpunct = tok[-1] + tpunct
        tok = tok[:-1]
    blead = ''
    while tok and tok[0] in BRACKET_LEAD:
        blead += tok[0]
        tok = tok[1:]
    btrail = ''
    while tok and tok[-1] in BRACKET_TRAIL:
        btrail = tok[-1] + btrail
        tok = tok[:-1]
    return qlead, blead, tok, btrail, tpunct


_OPERATOR_TOKENS = {'+', '-', '*', '/', '=', '<', '>', '±', '\\to', '\\in', '\\le', '\\ge',
                    '\\Rightarrow', '\\neq', '\\sim', '\\approx', '\\forall', '\\exists',
                    '\\mapsto', '\\cdot', '\\times', '\\div'}


def _is_mathy(core):
    if not core:
        return False
    # une virgule finale (listes du type "x, y ∈ I") ne doit pas empecher de
    # reconnaitre un token comme mathematique ; elle reste neanmoins dans le
    # texte teste (elle fait partie de "piece" cote appelant).
    test = core[:-1] if core.endswith(',') else core
    if not test:
        return False
    if test in _OPERATOR_TOKENS:
        return True
    if re.search(r'[\\^_{}0-9()\[\]|]', test):
        return True
    if re.fullmatch(r"[A-Za-z]'{0,3}", test):
        return True
    return False


def _word_pass(text):
    """Reconstruit le texte en regroupant les tokens 'mathematiques' consecutifs
    dans un seul bloc \\( ... \\), et en recollant la ponctuation finale
    (., ;, :, ?, !, ,) sans espace superflu. Les parentheses appartenant a une
    expression mathematique (ex. "(3n + 1)") restent a l'interieur du meme
    bloc \\( ... \\) au lieu de le fragmenter, pour un espacement fidele a un
    veritable rendu LaTeX."""
    tokens = text.split(' ')
    pieces = []  # liste de (texte, coller_sans_espace_avant)
    buf = []
    n = len(tokens)

    def flush():
        if buf:
            merged = ' '.join(buf).strip()
            if merged:
                pieces.append(('\\(' + merged + '\\)', False))
            buf.clear()

    i = 0
    while i < n:
        tok = tokens[i]
        if tok == '':
            i += 1
            continue
        qlead, blead, core, btrail, tpunct = _split_token(tok)
        mathy = _is_mathy(core)
        if mathy:
            if qlead:
                flush()
                pieces.append((qlead, False))
            piece = blead + core + btrail
            buf.append(piece)
            if tpunct:
                flush()
                pieces.append((tpunct, True))
        else:
            flush()
            pieces.append((tok, False))
        i += 1
    flush()

    out = ''
    for txt, glue in pieces:
        if out and not glue:
            out += ' '
        out += txt
    return out


def convert(text):
    if not isinstance(text, str):
        return text
    s = _char_pass(text)
    s = _word_pass(s)
    # nettoyage : espaces multiples eventuels
    s = re.sub(r' {2,}', ' ', s)
    return s


def convert_question(item):
    if 'q' in item:
        item['q'] = convert(item['q'])
    if 'ansText' in item and item['ansText'] is not None:
        item['ansText'] = convert(item['ansText'])
    if item.get('type') == 'qcm' and 'opts' in item:
        for o in item['opts']:
            o['text'] = convert(o['text'])
    return item


if __name__ == '__main__':
    tests = [
        "Soit la suite définie par <em>uₙ = (3n + 1) / (n + 2)</em>. Calculer lim<sub>n→+∞</sub> uₙ.",
        "Calculer lim<sub>n→+∞</sub> ( √(n² + n) − n ).",
        "D'après le cours, une suite croissante et majorée est :",
        "convergente, vers sup{uₙ}",
        "Le DL usuel de eˣ au voisinage de 0, à l'ordre n, est :",
        "1 + x + x²/2! + ... + xⁿ/n! + o(xⁿ)",
        "Sachant que ch(x) = (eˣ + e⁻ˣ) / 2, calculer ch(0).",
        "Soit f(x) = x³ − 2x² + 5. Calculer f′(1).",
        "il existe M tel que, pour tout n, uₙ ≤ M",
        "∀ε > 0, ∃η > 0, ∀(x, y) ∈ I², |x − y| ≤ η ⟹ |f(x) − f(y)| ≤ ε",
    ]
    for t in tests:
        print(repr(t))
        print(' ->', convert(t))
        print()
