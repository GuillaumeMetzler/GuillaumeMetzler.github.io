from numpy import linalg as LA
import numpy as np
import pandas as pd
import tensorflow as tf
np.random.seed(1)

def extract_features(data, labels):
    # number of images
    m = data.shape[0]
    # width of the image
    w = data.shape[1]
    # height of the image
    h = data.shape[2]
    # create table from unprocessed data
    raw_data = data.reshape(m, w*h)
    raw_data = pd.DataFrame(data=raw_data)
    raw_data['target'] = labels

    # reshape data to run vectorized calculations
    data = data.T.reshape([w, h, m])
    # divide pixel color numbers by 255
    data = data / 255
    # initialize array to store extracted features with 3 columns for first 3 ones.
    new_data = np.zeros([m, 3])
    # calculate the coefficients of variation (CV) of diagonal...
    new_data[:, 0] = np.std(np.diagonal(data), axis=1)/np.mean(np.diagonal(data), axis=1)
    # and anti-diagonal pixels of image...
    new_data[:, 1] = np.std(np.diagonal(np.rot90(data)), axis=1)/np.mean(np.diagonal(np.rot90(data)), axis=1)
    # define "shapes" of pictures
    new_data[:, 2] = LA.norm(np.mean(data, axis=0), axis=0)/LA.norm(np.mean(data, axis=1), axis=0)
    #############
    # next 4 features are CVs of all pixels of each quadrant.
    # define quadrant's shape: in this case 14x14 pixels
    quad_shape = int(w/2)
    # number of quadrants per 0 and 1 axis. Now it will be 2 per "width" and per "height"
    n_quad = w//quad_shape
    # next: total number of feature's we'l get.
    # it equals the number of 14x14 smaller shapes into which 28x28 shape could be splitted.
    n_feat = np.square(int((w//quad_shape)))
    # reshape data to size: (2, 14, 2, 14, 60000): 2x2 quadrants with 14x14 shape each
    # and 60000 depth (for train dataset).
    resh_data = data.copy().reshape(n_quad, quad_shape, n_quad, quad_shape, m)
    # calculate std for each image in each quadrant
    feat_std = np.std(np.std(resh_data, axis=3), axis=1).reshape(n_feat, m).T
    # calculate mean for each image in each quadrant
    feat_mean = np.mean(np.mean(resh_data, axis=3), axis=1).reshape(n_feat, m).T
    # get 4 new features that represent division of std by mean (CV) for each of 4 quadrants.
    feat = feat_std/feat_mean
    # stack new features to the previous 3.
    new_data = np.hstack([new_data, feat])
    #############
    # get diagonal pixels from each of 4 quadrants
    get_diag = np.diagonal(resh_data, axis1=1, axis2=3).reshape(n_feat, m, quad_shape)
    # get anti-diagonal pixels from each of 4 quadrants
    get_diag_rot = np.diagonal(resh_data, axis1=1, axis2=3).reshape(n_feat, m, quad_shape)
    # calculate CV for diagonals
    feat = np.std(get_diag, axis=2).T/np.mean(get_diag, axis=2).T
    # calculate CV for anti-diagonals
    feat_rot = np.std(get_diag_rot, axis=2).T/np.mean(get_diag_rot, axis=2).T
    # calculate CV for sum of diagonals and anti-diagonals values
    sum_feat = (np.std(get_diag, axis=2).T+np.std(get_diag_rot, axis=2).T)/\
               (np.mean(get_diag, axis=2).T+np.mean(get_diag_rot, axis=2).T)
    # stack new features to the previous.
    new_data = np.hstack([new_data, feat, feat_rot, sum_feat])
    ########
    # calculate CV for sum of rows and columns pixels
    feat = (np.std(data, axis=0)+np.std(data, axis=1))/(np.mean(data, axis=0)+np.mean(data, axis=1))
    # stack new features to the previous.
    new_data = np.hstack([new_data, feat.T])
    ########
    # next features without comments, because it's hard to describe in words their meaning
    # you can sort out by yourself how they are calculated

    def calc_feat(feat, axis):
        return (np.mean(feat, axis=axis)).reshape(-1, 1)
    # next 90 features
    for i in range(1, int(w / 2) + 2):
        feat = np.std(data[:i, :, :], axis=0)
        new_data = np.hstack([new_data, calc_feat(feat, 0)])

        feat = np.std(data[:, :i, :], axis=0)
        new_data = np.hstack([new_data, calc_feat(feat, 0)])

        feat = np.std(data[-i:, :, :], axis=0)
        new_data = np.hstack([new_data, calc_feat(feat, 0)])

        feat = np.std(data[:, -i:, :], axis=0)
        new_data = np.hstack([new_data, calc_feat(feat, 0)])

        feat = (np.std(np.diagonal(data, offset=-i), axis=1) / np.mean(np.diagonal(data, offset=-i), axis=1)).reshape(-1, 1)
        new_data = np.hstack([new_data, feat])

        feat = (np.std(np.diagonal(data, offset=i), axis=1) / np.mean(np.diagonal(data, offset=i), axis=1)).reshape(-1, 1)
        new_data = np.hstack([new_data, feat])

    #########
    # next 57 features

    for r in range(w - 1):
        cur_2 = np.zeros([m, w - 1])
        cur_3 = np.zeros([m, w - 2])

        for c in range(h - 1):
            cur_2[:, c] = np.std(LA.norm(data[r:r + 2, c:c + 2, :], axis=0), axis=0)

            if r < w - 2 and c < h - 2:
                cur_3[:, c] = np.std(LA.norm(data[r:r + 3, c:c + 3, :], axis=0), axis=0)

        new_data = np.hstack([new_data, calc_feat(cur_2, 1)])
        new_data = np.hstack([new_data, calc_feat(cur_3, 1)])

    ######
    # next 13 features
    rows = h - 1
    cols = w - 1
    for r in range(int(rows / 2)):
        cur_1 = np.zeros([m, int(cols / 2)])
        for c in range(int(cols / 2)):
            cur_1[:, c] = LA.norm(data[(r, r, rows - r, rows - r), (c, cols - c, c, cols - c), :], axis=0)
        new_data = np.hstack([new_data, np.std(cur_1, axis=1).reshape(-1, 1)])

    # check how many NaN values were created
    print('Total Non NaN values: ' + str(np.count_nonzero(~np.isnan(new_data))))
    print('Total NaN values: ' + str(np.count_nonzero(np.isnan(new_data))))
    # convert NaNs to zeros
    new_data = np.nan_to_num(new_data)
    print(new_data.shape)
    # create DataFrame with all features
    new_data = pd.DataFrame(data=new_data)
    # add labels to DataFrame
    new_data['target'] = labels
    # drop duplicated columns
    new_data = new_data.T.drop_duplicates().T
    print(new_data.shape)

    return new_data, raw_data


# load MNIST fashion dataset
(X_train, y_train), (X_test, y_test) = tf.keras.datasets.fashion_mnist.load_data()
# extract features from train dataset
data = X_train
labels = y_train
new_data, raw_data = extract_features(data, labels)
# save extracted features
new_data.to_csv('clothes_train.csv', index=False)
# save original image pixels as table
raw_data.to_csv('tf_train.csv', index=False)
print('Train dataset is processed')
# extract features from test dataset
data = X_test
labels = y_test
new_data, raw_data = extract_features(data, labels)
# save extracted features
new_data.to_csv('clothes_test.csv', index=False)
# save original image pixels as table
raw_data.to_csv('tf_test.csv', index=False)
print('Test dataset is processed')