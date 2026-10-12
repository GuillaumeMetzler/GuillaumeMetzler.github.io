"""
Utility functions for TDs
"""

import numpy as np
import scipy
import matplotlib.pyplot as plt
import seaborn as sns
from mpl_toolkits.axes_grid1 import make_axes_locatable


def sample_uniform(n):
    x = np.random.uniform(-1.5, 1.5, n)
    y = np.random.uniform(-0.5, 2.5, n)
    X = np.stack([x, y], -1)
    return X

def sample_gaussian(n):
    x = np.random.randn(n) * 0.5
    y = np.random.randn(n) * 0.5 + 1.
    X = np.stack([x, y], -1)
    return X

def sample_truncated(n):
    X = np.empty((0, 2))
    while len(X) < n:
        x = np.random.uniform(-1.5, 1.5, n)
        y = np.random.uniform(-0.5, 2.5, n)
        X_add = np.stack([x, y], -1)
        mask = ((x-1)**3-y+1 <= 0) & (x+y-2<=0)
        X = np.concatenate((X, X_add[mask])) 
    X = X[:n]
    return X

def rosenbrock(x):
    return (1-x[:, 0])**2 + 100 * (x[:, 1] - x[:, 0]**2)**2


def show_rare_event(X_full, y_full, X_mc=None, y_mc=None, weights=None, threshold=670, ax=None, title="Proba"):
    if ax is None:
        ax = plt.gca()
    im = ax.scatter(X_full[:, 0], X_full[:, 1], c=y_full)
    ax.set_xlabel("X1", fontsize=15); ax.set_ylabel("X2", fontsize=15);
    title = title.split("_")[1]
    ax.set_title(r"%s:   $P(y > \tau) = %.4f$"%(title, np.mean(y_full > 670)), fontsize=16)
    divider = make_axes_locatable(ax)
    cax = divider.append_axes('right', size='5%', pad=0.05)
    cbar = ax.figure.colorbar(im, cax=cax, orientation='vertical')
    cbar.ax.set_ylabel('Y = f(X)', fontsize=15)
    if X_mc is not None:
        if weights is None:
            ax.plot(X_mc[:, 0], X_mc[:, 1], "o", c="w", markeredgecolor="k")
            ax.set_title(r"%s:   $\hat{P}(y > \tau) = %.4f$"%(title, np.mean(y_mc > 670)), fontsize=16)
        else:
            ax.scatter(X_mc[:, 0], X_mc[:, 1], s=weights*30, marker="o", facecolor="w", edgecolor="k")
            ax.set_title(r"%s:   $\hat{P}(y > \tau) = %.4f$"%(title, np.round(np.mean(weights*(y_mc > 670)), 4)), fontsize=16)
    return ax
    


def gaussian(x, mu=0., s=1.):
    return 1./np.sqrt( 2. * np.pi * s**2 ) * np.exp( -(x.ravel()-mu)**2 / ( 2. * s**2 ) )


def show_gaussian(Xs=None, Xt=None, ys=None, yt=None, model=None, weights=None,
                  show_error_src=False, show_error_tgt=False):
    """
    This is the plotting function 
    """
    Xs = Xs.ravel()
    Xt = Xt.ravel()

    if ys is None and yt is None:
        fig, ax = plt.subplots(1, 1, figsize=(8, 3))

        alpha = 0.1
        for x in Xs:
            ax.plot([x, x], [0, alpha], c="C0")
        ax.plot([x, x], [0, alpha], c="C0", label=r"$x_i$ observations")
        
        alpha = 0.1
        for x in Xt:
            ax.plot([x, x], [0, alpha], c="C1")
        ax.plot([x, x], [0, alpha], c="C1", label=r"$x'_i$ observations")

        ax.tick_params(left = False, right = False , labelleft = True ,
                        labelbottom = True, bottom = False, top = False)
        ax.spines.top.set_visible(False)
        ax.spines.right.set_visible(False)

        ylim_max = 0.45

        ax.plot(1, 0.0, ls="", marker=">", ms=10, color="k", clip_on=False,
                transform=ax.get_yaxis_transform())
        ax.plot(-4.3, ylim_max, ls="", marker="^", ms=10, color="k", clip_on=False)

        # ax.set_ylim(0., ylim_max)
        ax.set_xlim(-4.3, 4.3)

        ax.set_xlabel("X ~ P(X)", fontsize=16)
        ax.set_ylabel(r"$\widehat{p_s}(x)$", fontsize=16)
        
        if weights is None:
            sns.kdeplot(Xs, label=r"$\widehat{p_s}(x)$", ax=ax, shade=True)
        else:
            np.random.seed(123)
            bs_index = np.random.choice(len(Xs), 3 * len(Xs), p=weights/weights.sum())
            sns.kdeplot(Xs[bs_index], label=r"$w(x) \widehat{p_s}(x)$", ax=ax, shade=True)
        sns.kdeplot(Xt, label=r"$\widehat{p_t}(x)$", ax=ax, shade=True)

        ax.legend(fontsize=16, loc="upper right", bbox_to_anchor=(1.4, 1.05))
    
    else:
        fig = plt.figure(figsize=(8, 8))

        gs = fig.add_gridspec(2, 1, height_ratios=(2, 1),
                              left=0.1, right=0.9, bottom=0.1, top=0.9,
                              wspace=0.05, hspace=0.0)
        # Create the Axes.
        ax2 = fig.add_subplot(gs[1, 0])
        ax1 = fig.add_subplot(gs[0, 0], sharex=ax2)
        
        if weights is None:
            lns1 = ax1.plot(Xs, ys, '.', ms=15, alpha=0.7, c="C0",
                            markeredgecolor="C0", label=r"$(x_i, y_i)$ observations")
        else:
            lns1 = ax1.scatter(Xs, ys, s=100*weights, alpha=0.7, c="C0",
                            edgecolor="C0", label=r"$(x_i, y_i)$ observations")
            lns1 = [lns1]
        lns8 = ax1.plot(Xt, yt, '.', ms=15, alpha=0.7, c="C1",
                        markeredgecolor="C1", label=r"$(x'_i, y'_i)$ !not available!")

        lin = np.linspace(-4.2, 4.2, 100)

        ax2.plot(lin, gaussian(lin, mu=-1), color="C0")
        lns2 = ax2.fill_between(lin, gaussian(lin, mu=-1),
                                alpha=0.2, color="C0", label=r"$p_s(x)$")
        ax2.plot(lin, gaussian(lin, mu=1.), color="C1")
        lns6 = ax2.fill_between(lin, gaussian(lin, mu=1.),
                                alpha=0.2, color="C1", label=r"$p_t(x)$")

        alpha = 0.1
        for x in Xs:
            ax2.plot([x, x], [0, alpha], c="C0")
        lns3 = ax2.plot([x, x], [0, alpha], c="C0", label=r"$x_i$ observations")

        alpha = 0.1
        for x in Xt:
            ax2.plot([x, x], [0, alpha], c="C1")
        lns7 = ax2.plot([x, x], [0, alpha], c="C1", label=r"$x'_i$ observations")

        ax2.tick_params(left = False, right = False , labelleft = False ,
                        labelbottom = True, bottom = False, top = False)
        ax2.spines.top.set_visible(False)
        ax2.spines.right.set_visible(False)

        ax1.tick_params(left = True, right = False , labelleft = True ,
                        labelbottom = False, bottom = False, top = False)
        ax1.spines.top.set_visible(False)
        ax1.spines.right.set_visible(False)
        ax1.spines.bottom.set_visible(False)

        ylim_max_ax2 = 0.45
        ylim_min_ax2 = 0.
        ylim_max_ax1 = ax1.get_ylim()[1]
        ylim_min_ax1 = ax1.get_ylim()[0]
        
        lns5 = []
        lns4 = []
        if model is not None:   
            if hasattr(model, "predict"):
                yp = model.predict(lin.reshape(-1, 1))
            else:
                yp = model(lin.reshape(-1, 1))
            lns4 = ax1.plot(lin, yp, c="k", label=r"$\widehat{h^*}$  predictive model")
            
            if show_error_tgt:
                ypt = model.predict(Xt.reshape(-1, 1))
                for i in range(len(Xt)):
                    lns5 = plt.plot([Xt[i]]*2, [yt[i], ypt[i]], ":", c="red",
                    label=r"$\left|\widehat{h^*}(x'_i) - y'_i\right|$ errors")
                mse = np.mean(np.square(ypt - yt))
                plt.title("Target Average Squared Error : %.3f"%mse, fontsize=16)
                    
            if show_error_src:
                yps = model.predict(Xs.reshape(-1, 1))
                for i in range(len(Xs)):
                    lns5 = plt.plot([Xs[i]]*2, [ys[i], yps[i]], ":", c="red",
                    label=r"$\left|\widehat{h^*}(x_i) - y_i\right|$ errors")
                mse = np.mean(np.square(yps - ys))
                plt.title("Source Average Squared Error : %.3f"%mse, fontsize=16)

        ax2.plot(1, 0.0, ls="", marker=">", ms=10, color="k", clip_on=False,
                transform=ax2.get_yaxis_transform())
        ax1.plot(-4.3, ylim_max_ax1, ls="", marker="^", ms=10, color="k", clip_on=False)

        ax2.set_ylim(ylim_min_ax2, ylim_max_ax2)
        ax1.set_ylim(ylim_min_ax1, ylim_max_ax1)
        ax2.set_xlim(-4.3, 4.3)
        ax2.set_xlim(-4.3, 4.3)

        ax2.set_xlabel("X ~ P(X)", fontsize=16)
        ax1.set_ylabel("Y ~ P(Y|X)", fontsize=16)

        lns = lns1 + [lns2] + lns3 + lns8 + [lns6] + lns7 + lns4 + lns5
        labs = [l.get_label() for l in lns]
        ax1.legend(lns, labs, fontsize=16, loc="upper right", bbox_to_anchor=(1.4, 1.05))

    plt.show()