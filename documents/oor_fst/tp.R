################################################
##### Practical Session : Optimal Research #####
################################################


# Require packages for the practical session : for graphics

install.packages("geoR")
install.packages("lattice")

library(geoR)
library(lattice)


####################
### Introduction ###
####################

# We prepare the different functions and their gradient.
# In what follows : u will be the vector (x,y)

# Function f1 and its gradient
f1<-function(u){
  z<-u[1]^2+u[2]^2/20
  return(z)
}

gradf1<-function(u){
  nabla<-c(2*u[1],u[2]/10)
  return(nabla)
}

# Function f2 and its gradient
f2<-function(u){
  z<-u[1]^2/2+u[2]^2/2
  return(z)
}

gradf2<-function(u){
  nabla<-c(u[1],u[2])
  return(nabla)
}

# Function f3 and its gradient
f3<-function(u){
  z<-(1-u[1])^2+10*(u[2]-u[1]^2)^2
  return(z)
}

gradf3<-function(u){
  nabla<-c(40*u[1]^3-40*u[1]*u[2]+2*u[1]-2,20*u[2]-20*u[1]^2)
  return(nabla)
}

# Function f1 and its gradient
f4<-function(u){
  z<-u[1]^2/2+u[1]*cos(u[2])
  return(z)
}

gradf4<-function(u){
  nabla<-c(u[1]+cos(u[2]),-u[1]*cos(u[2]))
  return(nabla)
}

# 3) Plot the functions

# All the functions are plotted in [-5,5]^2

# Function f1

u = expand.grid(list(x=seq(-5,5,0.1),y=seq(-5,5,0.1)))   # An other way to create a grid
z<-u[,1]^2+u[,2]^2/20                                    # You evaluate fhe function at point of the grid
u$f_1= as.numeric(unlist(z))                             # Convert the results and add it to the data frame



wireframe(f_1 ~ x*y, data = u, 
          xlab = "X", ylab = "Y ",
          main = "Function 1",
          drape = TRUE,
          colorkey = TRUE,
          col.regions = colorRampPalette(c("yellow", "red"))(1000),
          screen = list(z = 60, x = -60)
)

# You indicate the names of the column you want to plot with respect to which one. The name of the data set.
# Labels of each axes
# Title of the graph
# The color you want to use to plot the graph
# screen : orientation of the graph

# Function f2

u = expand.grid(list(x=seq(-5,5,0.1),y=seq(-5,5,0.1)))
z<-u[,1]^2/2+u[,2]^2/2
u$f_2= as.numeric(unlist(z))



wireframe(f_2 ~ x*y, data = u,
          xlab = "X", ylab = "Y ",
          main = "Function 4",
          drape = TRUE,
          colorkey = TRUE,
          col.regions = colorRampPalette(c("yellow", "red"))(1000),
          screen = list(z = 60, x = -60)
)

# Function f3

u = expand.grid(list(x=seq(-5,5,0.1),y=seq(-5,5,0.1)))
z<-(1-u[,1])^2+10*(u[2]-u[1]^2)^2
u$f_3= as.numeric(unlist(z))



wireframe(f_3 ~ x*y, data = u,
          xlab = "X", ylab = "Y ",
          main = "Function 4",
          drape = TRUE,
          colorkey = TRUE,
          col.regions = colorRampPalette(c("yellow", "red"))(1000),
          screen = list(z = 60, x = -60)
)

# Function f4

u = expand.grid(list(x=seq(-5,5,0.1),y=seq(-5,5,0.1)))
z<-0.5*u[,1]^2+u[,1]*cos(u[,2])
u$f_4= as.numeric(unlist(z))



wireframe(f_4 ~ x*y, data = u,
          xlab = "X", ylab = "Y ",
          main = "Function 4",
          drape = TRUE,
          colorkey = TRUE,
          col.regions = colorRampPalette(c("yellow", "red"))(1000),
          screen = list(z = 10, x = -60)
)




###########################################
### A. Gradient Descent with a fix step ###
###########################################


# In what follows, we will not use the stopping criterion (see later for that)
# We will simply indicate the number of iteration we'll use.

# 1) Function for the gradient descent

myfixgrad<-function(f,gradf,eta,init,max_iter){       # arguments are : function, its gradient, the learning rate, initialization, number of iterations
  
  Value<-rep(0,max_iter+1)                         # We save the value of the function in a vector
  Point<-matrix(0,nrow=2,ncol=(max_iter+1))        # Same with the coordinates of the points in a matrix
  u<-init
  
  Value[1]<-f(u)
  Point[,1]<-u
  
  # We make a loop to update the point u in the algorithm.
  
  for (i in 1:max_iter){
    nabla<- gradf(u)          # We compute the gradient of the function at point u.
    u<- u-eta*nabla           # Update rule.
  
    Value[(i+1)]=f(u)         # We save the new value
    Point[,(i+1)]=u           # and the new point
  }
  
  L=list(Value=Value,Point=Point) # Create a list with the elements we want thez function to return
  return(L)
  
}

# You can now use this for the different functions

# For the example presented we have 

Res<-myfixgrad(f4,gradf4,0.001,c(-3,3),40000)

P<-Res$Point
V<-Res$Value

plot(P[1,],P[2,],col='blue',type='l',xlab="x",ylab="y")             # To represent the evolution of point u over iterations.
plot(V,col='blue',type='l',xlab="Iterations",ylab="Value of f")     # To see the evolution of f over iterations.




#############################################
### B. Gradient Descent with optimal step ###
#############################################

# 2. Implementation of optimal gradient descent

# As mentioned in the correction, we only apply it for quadratic function.
# The process is harder to implement for any functions.

# f(u)=1/2 u^TAu -b^Tu for quadratic functions.
# u is supposed to be a column vector !

myoptigrad<-function(A,b,init,max_iter){     # A and b are used to represent the quadratic fucntion the others are still the same.
  
  Value<-rep(0,max_iter+1)                       # We save the value of the function in a vector
  Point<-matrix(0,nrow=2,ncol=(max_iter+1))      # Same with the coordinates of the points in a matrix
  u<-init
  
  Value[1]<-0.5*t(u)%*%A%*%u-t(b)%*%u                   # t is used to transpose the matrix.
  Point[,1]<-u
  
  # We make a loop to update the point u in the algorithm.
  
  for (i in 1:max_iter){
    nabla<- A%*%u-b           # We compute the gradient of the function at point u.
    eta<-as.numeric((t(A%*%u-b)%*%(A%*%u-b))/(t(A%*%u-b)%*%A%*%(A%*%u-b))) # We calculate the optimal learning rate
    u<- u-eta*nabla           # Update rule.
    
    Value[(i+1)]=0.5*t(u)%*%A%*%u-t(b)%*%u            # We save the new value
    Point[,(i+1)]=u                               # and the new point
  }
  
  L=list(Value=Value,Point=Point) # Create a list with the elements we want thez function to return
  return(L)
}

# 3. Solve the problem for the function f_1

A<-matrix(c(2,0,0,1/10),nrow=2,ncol=2)
b<-matrix(c(0,0),nrow=2,ncol=1)

init<-matrix(c(-1,1),nrow=2,ncol=1)

Reso<-myoptigrad(A,b,init,10)

# We compare the results with the first algorithm.
# We compare values of f and u over iterations.

iter=30

Resf<-myfixgrad(f1,gradf1,0.98,c(-1,1),iter)

P<-Resf$Point
V<-Resf$Value

Reso<-myoptigrad(A,b,init,iter)

Po<-Reso$Point
Vo<-Reso$Value

# Set graphic parameters

limx=c(0,length(V))
limy=c(0,max(V,Vo))

plot(c(0:(length(V)-1)),V,col='blue',type='l',xlab="x",ylab="y",xlim=limx,ylim=limy,lwd=3)
par(new=TRUE)
plot(c(0:(length(Vo)-1)),Vo,col='red',type='l',xlab="x",ylab="y",xlim=limx,ylim=limy,lwd=3)
legend("topright",c("fix step","optimal step"),lty=1,lwd=3,col=c("blue","red"))







###########################
### C. Newton's Method  ###
###########################


# We first need to compute all the Hessian matrices

hessf1<-function(u){
  M<-matrix(c(2,0,0,1/10),nrow=2,ncol=2)
  return(M)
}

hessf2<-function(u){
  M<-matrix(c(1,0,0,1),nrow=2,ncol=2)
  return(M)
}

hessf3<-function(u){
  M<-matrix(c(120*u[1]^2-40*u[2]+2,-40*u[1],-40*u[1],20),nrow=2,ncol=2)
  return(M)
}

hessf4<-function(u){
  M<-matrix(c(1,-sin(u[2]),-sin(u[2]),-u[1]*cos(u[2])),nrow=2,ncol=2)
  return(M)
}

# 2) Solve the problem for different functions.

# We first implement the method

myhessgrad<-function(f,gradf,Hess,eta,init,max_iter){       # arguments are : function, its gradient,its hessian, the learning rate, initialization, number of iterations
  
  Value<-rep(0,max_iter+1)                         # We save the value of the function in a vector
  Point<-matrix(0,nrow=2,ncol=(max_iter+1))        # Same with the coordinates of the points in a matrix
  u<-init
  
  Value[1]<-f(u)
  Point[,1]<-u
  
  # We make a loop to update the point u in the algorithm.
  
  for (i in 1:max_iter){
    nabla<- gradf(u)          # We compute the gradient of the function at point u.
    hess<-Hess(u)             # We compute the hessian matrix
    u<- u-eta*solve(hess)%*%nabla         # Update rule.
    
    Value[(i+1)]=f(u)         # We save the new value
    Point[,(i+1)]=u           # and the new point
  }
  
  L=list(Value=Value,Point=Point) # Create a list with the elements we want thez function to return
  return(L)
  
}

# You can now test it for the different functions

myhessgrad(f3,gradf3,hessf3,0.5,c(-1,1),100)





# Here we will compare the results of convergence of the three algorithms using function f3

iter=30

Resf<-myfixgrad(f1,gradf1,0.98,c(-1,1),iter)

P<-Resf$Point
V<-Resf$Value

Reso<-myoptigrad(A,b,init,iter)

Po<-Reso$Point
Vo<-Reso$Value

Resh<-myhessgrad(f1,gradf1,hessf1,1,c(-1,1),iter)

Ph<-Resh$Point
Vh<-Resh$Value

# Set graphic parameters

limx=c(0,length(V))
limy=c(0,max(V,Vo,Vh))

plot(c(0:(length(V)-1)),V,col='blue',type='l',xlab="x",ylab="y",xlim=limx,ylim=limy,lwd=3)
par(new=TRUE)
plot(c(0:(length(Vo)-1)),Vo,col='red',type='l',xlab="x",ylab="y",xlim=limx,ylim=limy,lwd=3)
par(new=TRUE)
plot(c(0:(length(Vh)-1)),Vh,col='green',type='l',xlab="x",ylab="y",xlim=limx,ylim=limy,lwd=3)
legend("topright",c("fix step","optimal step","Newton's method"),lty=1,lwd=3,col=c("blue","red","green"))






















P=100
N=900
beta=1

u = expand.grid(list(x=seq(0,100,1),y=seq(0,900,100)))   # An other way to create a grid
z<-(1+beta^2)*(P-u[,1])/((1+beta^2)*P-u[,1]+u[,2])                                   # You evaluate fhe function at point of the grid
u$f_1= as.numeric(unlist(z))                             # Convert the results and add it to the data frame



wireframe(f_1 ~ x*y, data = u, 
          xlab = "X", ylab = "Y ",
          main = "Function 1",
          drape = TRUE,
          colorkey = TRUE,
          col.regions = colorRampPalette(c("yellow", "red"))(1000),
          screen = list(z = 60, x = -60)
)















######################################
######################################
##### Partie concernant l'examen #####
######################################
######################################

gamma=10

f<-function(u){
  z<-0.5*(u[1]^2+gamma*u[2]^2+2*u[1]*u[2])-2*u[1]+2*u[2]
  return(z)
}

gradf<-function(u){
  z<-c(u[1]+u[2]-2,gamma*u[2]+u[1]+2)
  return(z)
}

myoptigrad<-function(A,b,init,max_iter){     # A and b are used to represent the quadratic fucntion the others are still the same.
  
  u_star<-solve(A)%*%b
  
  Value<-rep(0,max_iter+1)                       # We save the value of the function in a vector
  Norm<-rep(0,max_iter+1)
  Norm2<-rep(0,max_iter+1)
  Point<-matrix(0,nrow=2,ncol=(max_iter+1))      # Same with the coordinates of the points in a matrix
  u<-init
  
  Value[1]<-0.5*t(u)%*%A%*%u-t(b)%*%u                   # t is used to transpose the matrix.
  Point[,1]<-u
  Norm[1]<-t(u-u_star)%*%A%*%(u-u_star)
  Norm2[1]<-t(u-u_star)%*%(u-u_star)

  

  
  # We make a loop to update the point u in the algorithm.
  
  for (i in 1:max_iter){
    nabla<- A%*%u-b           # We compute the gradient of the function at point u.
    eta<-as.numeric((t(A%*%u-b)%*%(A%*%u-b))/(t(A%*%u-b)%*%A%*%(A%*%u-b))) # We calculate the optimal learning rate
    u<- u-eta*nabla           # Update rule.
    
    Value[(i+1)]=0.5*t(u)%*%A%*%u-t(b)%*%u            # We save the new value
    Point[,(i+1)]=u                                   # and the new point
    Norm[(i+1)]=t(u-u_star)%*%A%*%(u-u_star)
    Norm2[(i+1)]=t(u-u_star)%*%(u-u_star)
  }
  
  L=list(Value=Value,Point=Point,Sol=u_star,Norm=Norm,Norm2=Norm2) # Create a list with the elements we want thez function to return
  return(L)
}


# 3. Solve the problem for the function f_1

A<-matrix(c(1,1,1,gamma),nrow=2,ncol=2)
b<-matrix(c(2,-2),nrow=2,ncol=1)

init<-matrix(c(-1,1),nrow=2,ncol=1)

# We compare the results with the first algorithm.
# We compare values of f and u over iterations.

iter=20

Resf<-myfixgrad(f,gradf,0.02,init,iter)

P<-Resf$Point
V<-Resf$Value




gamma=2

init<-matrix(c(20,1),nrow=2,ncol=1)
A<-matrix(c(1,1,1,gamma),nrow=2,ncol=2)
b<-matrix(c(2,-2),nrow=2,ncol=1)


Reso<-myoptigrad(A,b,init,iter)

#Po<-Reso$Point
#Vo<-Reso$Value
No2<-Reso$Norm



gamma=50
init<-matrix(c(20,1),nrow=2,ncol=1)
A<-matrix(c(1,1,1,gamma),nrow=2,ncol=2)
b<-matrix(c(2,-2),nrow=2,ncol=1)


Reso<-myoptigrad(A,b,init,iter)

#Po<-Reso$Point
#Vo<-Reso$Value
No50<-Reso$Norm

# Set graphic parameters

limx=c(1,10)
#limy=c(min(0,min(V,Vo)),max(V,Vo))
limy=c(min(No2[-1],No50[-1]),max(No2[-1],No50[-1]))

#plot(c(0:(length(V)-1)),V,col='blue',type='l',xlab="",ylab="",xlim=limx,ylim=limy,lwd=3)
#par(new=TRUE)
#plot(c(0:(length(Vo)-1)),Vo,col='red',type='l',xlab="iteration",ylab="Value of the function",xlim=limx,ylim=limy,lwd=3)
#legend("topright",c("fix step","optimal step"),lty=1,lwd=3,col=c("blue","red"))
#legend("topright",c("optimal step"),lty=1,lwd=3,col=c("red"))

plot(c(0:(length(No2)-1)),No2,type='l',xlab="iteration",ylab="Log Value of the norm",xlim=limx,ylim=limy,lwd=3,cex.lab=1.5,cex.axis=1.5,lty=1,log="y")
par(new=TRUE)
plot(c(0:(length(No50)-1)),No50,type='l',xlab="",ylab="",xlim=limx,ylim=limy,lwd=3,xaxt="n",yaxt="n",lty=4,log="y")

#legend("topright",c("fix step","optimal step"),lty=1,lwd=3,col=c("blue","red"))
legend("topright",c("optimal step with gamma = ???", "optimal step with gamma = ???"),lty=c(1,4),lwd=3)


N50<-No

N5<-No





u = expand.grid(list(x=seq(-100,100,1),y=seq(-50,50,100)))   # An other way to create a grid
z<-0.5*(u[,1]^2+u[,2]^2+2*u[,1]*u[,2])-2*u[,1]+2*u[,2]                                   # You evaluate fhe function at point of the grid
u$f_1= as.numeric(unlist(z))                             # Convert the results and add it to the data frame



wireframe(f_1 ~ x*y, data = u, 
          xlab = "X", ylab = "Y ",
          main = "Function 1",
          drape = TRUE,
          colorkey = TRUE,
          col.regions = colorRampPalette(c("yellow", "red"))(1000),
          screen = list(z = -40, x = -60, y = 30)
)

















u = expand.grid(list(x=seq(-5,5,0.1),y=seq(-5,5,0.1)))  
z_1 = abs(u[,1])+abs(u[,2])
z_2 = sqrt (abs(u[,1])^2+abs(u[,2])^2)
u$f_1= as.numeric(unlist(z_1)) 
u$f_2= as.numeric(unlist(z_2)) 
  
