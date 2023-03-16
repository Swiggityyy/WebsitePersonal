import os
from os import listdir
import pandas as pd
 
# get the path/directory
folder_dir = "/home/swiggityyy/Desktop/images"



for images in os.listdir(folder_dir):
 
    # check if the image ends with png
    if (images.endswith(".jpg")):    
            print("{")
            print(f"original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/images/{images}',")
            print(f"thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/images/{images}',")
            print("},")
        
      
      