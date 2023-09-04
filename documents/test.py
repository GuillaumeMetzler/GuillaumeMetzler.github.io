from random import random
import matplotlib.pyplot as plt
import sys
import math
import numpy as np

n = int(sys.argv[1])


def pi_estimation(n):
	m = 0
	for i in range(n):
		x = 2*(random()-0.5)
		y = 2*(random()-0.5)

		if x**2+y**2 < 1:
			m += 1

	my_pi_est = 4*m/n
	return(my_pi_est)

print("Une estimation de la valeur de pi avec n égal à {0} est donné par {1}".format(n,pi_estimation(n)))


#plt.ion()
#for i in range(50):
#    y = np.random.random([10,1])
#    plt.plot(y)
#    plt.draw()
#    plt.pause(0.0001)
#s    plt.clf()


figure, axes = plt.subplots()
Drawing_uncolored_circle = plt.Circle( (0, 0 ),
                                      1 ,
                                      fill = False )
plt.xlim(-1, 1)
plt.ylim(-1, 1)
 
axes.set_aspect( 1 )
axes.add_artist( Drawing_uncolored_circle )
plt.ion()
plt.draw()
plt.pause(1)
m = 0
for i in range(n+1):
		x = 2*(random()-0.5)
		y = 2*(random()-0.5)

		if x**2+y**2 < 1:
			m +=1
			plt.scatter(x, y,c = "red")
		else:
			plt.scatter(x, y,c = "blue")

		if i%200==0:
			print(np.abs(4*m/(i+1) - math.pi))
			plt.title("Une estimation de la valeur de pi avec {0} points est égale à {1}".format(i,4*m/(i+1)))
			plt.draw()
			plt.pause(1)

