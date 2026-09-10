import numpy as np
import matplotlib.pyplot as plt


def my_func(x, y):
    return ((1-x)**2 + 10*(x**2-y**2)**2)

# First construct a grid of (x,y) parameter pairs and their
# corresponding cost function values.
x_grid = np.linspace(-5,5,101)
y_grid = np.linspace(-5,5,101)

# A labeled contour plot for the RHS cost function
X, Y = np.meshgrid(x_grid, y_grid)
f_values = my_func(X,Y)

fig, ax = plt.subplots()
contours = ax.contour(X, Y, f_values, 30)
ax.clabel(contours)
# The target parameter values indicated on the cost function contour plot
#ax.scatter(*1,*1,s=[50,10], color=['k','w'])



# Take N steps with learning rate alpha down the steepest gradient,
# starting at (theta0, theta1) = (0, 0).
N = 5
alpha = 0.7
u = [np.array((0,0))]
f_val = [my_func(u[-1][0],u[-1][1])]
for j in range(N-1):
    last_u = u[-1]
    this_u = np.empty((2,))
    this_u[0] = last_u[0] - alpha * (2*(1-last_u[0]) -  40*(last_u[1]-last_u[0]**2)*(2*last_u[0]))
    this_u[1] = last_u[1] - alpha * 20*(last_u[1]-last_u[0]**2)
    u.append(this_u)
    f_val.append(my_func(this_u[0],this_u[1]))


# Annotate the cost function plot with coloured points indicating the
# parameters chosen and red arrows indicating the steps down the gradient.
# Also plot the fit function on the LHS data plot in a matching colour.
colors = ['b', 'g', 'm', 'c', 'orange']
for j in range(1,N):
    ax.annotate('', xy=u[j], xytext=u[j-1],
                   arrowprops={'arrowstyle': '->', 'color': 'r', 'lw': 1},
                   va='center', ha='center')
#ax.scatter(*zip(u), c=colors, s=30, lw=0)

# Labels, titles and a legend.
ax.set_xlabel(r'$x$')
ax.set_ylabel(r'$y$')
ax.set_title('Cost function')

plt.show()