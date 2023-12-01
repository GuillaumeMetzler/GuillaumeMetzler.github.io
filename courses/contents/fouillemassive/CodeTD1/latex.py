import glob
import pickle
import os
import gzip
import subprocess

import numpy as np

import sys
from subprocess import call

r = []
datasets = []
for filename in glob.glob("./results/res*.pklz"):
    f = gzip.open(filename, "rb")
    res = pickle.load(f)
    f.close()
    r.append(res)
    if datasets == [] or len(res.keys()) < len(datasets):
        datasets = sorted(list(res.keys()))
    algos = list(res[datasets[0]].keys())


def getMean(r):
    mr = {}
    for da in datasets:
        mr[da] = {}
        for a in algos:
            apTrain = []
            apTest = []
            for i in range(len(r)):
                apTrain.append(r[i][da][a][0])
                apTest.append(r[i][da][a][1])
            mr[da][a] = (np.mean(apTrain), np.std(apTrain),
                         np.mean(apTest), np.std(apTest))
    mr["Mean"] = {a: (np.mean([mr[da][a][0] for da in datasets]),
                      np.mean([mr[da][a][1] for da in datasets]),
                      np.mean([mr[da][a][2] for da in datasets]),
                      np.mean([mr[da][a][3] for da in datasets]))
                  for a in algos}
    return mr


def latex(r):
    if not os.path.exists("latex"):
        os.makedirs("latex")
    f = open('latex/doc.tex', 'w')
    sys.stdout = f
    print(r"\documentclass[a4paper, 12pt]{article}")
    print(r"\usepackage[french]{babel}")
    print(r"\usepackage[T1]{fontenc}")
    print(r"\usepackage{amssymb} ")
    print(r"\usepackage{amsmath}")
    print(r"\usepackage[utf8]{inputenc}")
    print(r"\usepackage{graphicx}")
    print(r"\usepackage{newtxtext}")
    print(r"\usepackage{booktabs}")
    print(r"\usepackage{multirow}")
    print(r"\begin{document}")
    mr = getMean(r)
    for name, idSet in [("test", 2), ("train", 0)]:
        print(r"\begin{table*}")
        print((r"\caption{Mean " + name + " F1 over " + str(len(r)) +
               " iterations}"))
        print(r"\resizebox{1.0\textwidth}{!}{\begin{tabular}{l", end="")
        for a in algos:
            print(" c", end="")
        print("}")
        print(r"\toprule")
        print("{:12}".format("Dataset"), end="")
        ranks = {}
        for a in algos:
            print("& {:11}".format(a.replace("_", "\\_")), end="")
            ranks[a] = 0
        print(r"\\")
        print(r"\midrule")
        for da in datasets + ["Mean"]:
            if da == "Mean":
                print(r"\midrule")
            print("{:12}".format(da.replace("%", "\\%")), end="")
            order = list(reversed(
                    np.argsort([mr[da][a][idSet] for a in algos])))
            best = algos[order[0]]
            if da != "Mean":
                for i, idx in enumerate(order):
                    ranks[algos[idx]] += 1+i
            for a in algos:
                b1 = ""
                b2 = ""
                if a == best:
                    b1 = r"\textbf{"
                    b2 = "}"
                print("&  " + b1 +
                      "{:4.1f}".format(mr[da][a][idSet]) +
                      b2 + " $\\pm$ {:4.1f}".format(mr[da][a][idSet+1]),
                      end="")
            print(r"\\")
            if da == "Mean":
                print("Average Rank", end="")
                for a in algos:
                    print("& {:1.2f}".format(ranks[a]/(len(datasets))), end="")
                print(r"\\")
        print(r"\bottomrule")
        print(r"\end{tabular}}")
        print(r"\end{table*}")
    print(r"\end{document}")
    f.close()
    call(["pdflatex", "-output-directory=latex", "latex/doc.tex"])
    os.remove("latex/doc.aux")
    os.remove("latex/doc.log")
    subprocess.Popen(["okular latex/doc.pdf"], shell=True)


latex(r)
