import keras
from keras.datasets import mnist
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
from keras.layers import Conv2D, MaxPooling2D
import numpy as np

batch_size = 128
num_classes = 10
epochs = 12

# dimensions des images
img_rows, img_cols = 28, 28

# séparation des données en train - test
(x_train, y_train), (x_test, y_test) = mnist.load_data()

x_train = x_train.reshape(60000,28,28,1)
x_test = x_test.reshape(10000,28,28,1)

print('x_train shape:', x_train.shape)
print(x_train.shape[0], 'train samples')
print(x_test.shape[0], 'test samples')

# conversion des classes en vecteur binaire (10 classes --> un vecteur de taille 10)
y_train = keras.utils.to_categorical(y_train, num_classes)
y_test = keras.utils.to_categorical(y_test, num_classes)

model = Sequential()
# cette première étape constitue des étapes de convolutions sur les données avec différentes convolutions
model.add(Conv2D(32, kernel_size=(3, 3),
                activation='relu',
                input_shape=(28,28,1)))
# le premier argument indique la dimension de l'output
# on indique ensuite la taille du masque de convolution
# la focntion d'activation
# la dimension des données en entrée
model.add(Conv2D(64, (3, 3), activation='relu'))
# une autre convolution, construite sur le même modèle
model.add(MaxPooling2D(pool_size=(2, 2)))
# taille de la fenêtre pour le max pooling
model.add(Dropout(0.25))
# ajout d'un terme de désactivation d'un réseau de neurone lors du passage d'un batch
# le paramètre indique la probabilité de désactiver un neurone
model.add(Flatten())
# "passage du format image au format vecteur"
model.add(Dense(128, activation='relu'))
# couche fully-connected
model.add(Dropout(0.5))
# drop out sur la couche)
model.add(Dense(num_classes, activation='softmax'))
# couche utilisée pour la classification --> plusieurs classes donc softmax

model.compile(loss=keras.losses.categorical_crossentropy,
             optimizer=keras.optimizers.Adadelta(),
             metrics=['accuracy'])
# Définission des paramètres d'optimisation

model.fit(x_train, y_train,
         batch_size=batch_size,
         epochs=epochs,
         verbose=1,
         validation_data=(x_test, y_test))
# apprentissage du modèle

score = model.evaluate(x_test, y_test, verbose=0)
# évaluation du modèle

print('Test loss:', score[0])
print('Test accuracy:', score[1])