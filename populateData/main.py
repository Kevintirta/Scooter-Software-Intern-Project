import firebase_admin
from firebase_admin import credentials, firestore
from package.GenerateData import *
import math
import random

def main(event=None, context=None):
    # setup firebase
    if (not len(firebase_admin._apps)):
        cred = credentials.Certificate("./serviceAccountKey.json")
        app = firebase_admin.initialize_app(cred)

    db = firestore.client()

    #Set center as center of Singapore
    center = Point(1.3406,103.82528859)

    #radius in meters and num of points
    radius = 200
    num_scooters = 100

    count = 0
    for i in range(0,num_scooters):
        point = randomGeoPoint(center, radius)
        data = {  
            'id': count,
            'coordinate': point
        }
        count +=1
        # Add a new doc in collection 'locations' with ID 'Scooter "id"'
        db.collection('locations').document('scooter'+str(count)).set(data)


if __name__ == "__main__":
    main()


