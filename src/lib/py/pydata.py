import numpy as np
import requests
import pandas as pd


def multiple(a, b):
   url="https://raw.githubusercontent.com/cs109/2014_data/master/countries.csv"
   df=pd.read_csv(url)

   return df.to_numpy()  #np.multiply(a, b).tolist()

def getcountries():
   url="https://raw.githubusercontent.com/cs109/2014_data/master/countries.csv"
   
   df=pd.read_csv(url)
   regions = df.Region.unique()

   return {"alldata":df.to_numpy(), "regions":regions}
