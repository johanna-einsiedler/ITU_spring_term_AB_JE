
import sys
import os
import pandas as pd
import numpy as np
from feature_extraction.utils import extract_signal


def readData():
    # get subfolders i.e. one for each muscle
    #subfolders = [f.path for f in os.scandir(path) if f.is_dir()]
    #print(subfolders)
    current_path = os.path.dirname( __file__ )
    folder = os.path.abspath(os.path.join(current_path, 'raw_data/'))
    # read in each dataset
    df = pd.DataFrame()
    #for folder in subfolders:
    files = [os.path.join(folder, f) for f in os.listdir(folder) if f.endswith(".h5")]
    df_muscle = pd.DataFrame(list(map(extract_signal,files)))
    df_muscle.rename(columns={0:'year',1:'month',2:'day',3:'hour',4:'minute',5:'signal',6:'sr',7:'time'},inplace=True)
    df_muscle['date'] = pd.to_datetime(df_muscle[['year', 'month', 'day']])
    df_muscle['muscle'] = folder
    df = pd.concat([df,df_muscle])

    # create unique id for each measurement
    df['id'] = range(0,df.shape[0])
    df = df.reset_index()

    # time of day indicator
    df['time_of_day'] = np.where(df['hour'] > 12, 'PM', 'AM')   

    # get length of each measurement
    times = []
    for i in range(df.shape[0]):
        times.append(df['time'][i][len(df['time'][i])-1])

    df.to_pickle('data/muscle_data.pkl')
        

if __name__ == "__main__":
    #path = sys.argv[1]
    readData()
    print('success')