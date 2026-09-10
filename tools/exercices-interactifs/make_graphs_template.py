# -*- coding: utf-8 -*-
"""
Gabarit pour generer des graphiques PNG au style du site (a dupliquer/adapter),
utilises par les questions "img" d'une banque d'exercices interactifs. Necessite
matplotlib (pip install matplotlib --break-system-packages si absent).

Une fois generes, transferer les PNG dans images/exercices/ sur le site (via
SendUserFile + device_commit_files si tu passes par une session Claude), et
les referencer depuis une question avec le champ "img" (voir data_example.py).
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import os

OUT = "graphs"
os.makedirs(OUT, exist_ok=True)

# Palette reprise du site (assets/css/site.css) pour que les figures
# s'inserent naturellement dans les cartes d'exercice.
NAVY = "#1e3a5f"
ORANGE = "#c96f27"
TEAL = "#0d8f82"
GRID = "#e2e6ee"
TEXT = "#1b2430"

plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 12,
    "text.color": TEXT,
    "axes.edgecolor": "#5b6472",
    "axes.labelcolor": TEXT,
    "xtick.color": "#5b6472",
    "ytick.color": "#5b6472",
})


def new_fig():
    fig, ax = plt.subplots(figsize=(6.4, 3.8), dpi=150)
    fig.patch.set_facecolor("white")
    ax.set_facecolor("white")
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.grid(True, color=GRID, linewidth=1)
    ax.axhline(0, color="#9aa3b2", linewidth=1)
    ax.axvline(0, color="#9aa3b2", linewidth=1)
    return fig, ax


def save(fig, name):
    path = os.path.join(OUT, name)
    fig.tight_layout()
    fig.savefig(path, facecolor="white")
    plt.close(fig)
    print("saved", path)


# ---------- exemple : un nuage de points pour illustrer une ACP ----------
fig, ax = new_fig()
rng = np.random.default_rng(0)
x = rng.normal(0, 1, 40)
y = 0.7 * x + rng.normal(0, 0.5, 40)
ax.scatter(x, y, color=NAVY, s=28, alpha=0.85)
ax.set_xlabel("axe 1")
ax.set_ylabel("axe 2")
save(fig, "exemple_nuage_points.png")

print("Termine.")
