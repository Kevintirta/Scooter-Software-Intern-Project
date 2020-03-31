import math
import random

class Point:
    """ Point class represents and manipulates latitude,longitude coords. """

    def __init__(self,latitude,longitude):
        """ Create a new point with latitude and longitude """
        self.latitude = latitude
        self.longitude = longitude

def randomGeoPoint(center, radius):
    """ 
    Given center (latitude and longitude) and radius, generate random coordinate
    @param center - contains latitude and longitude
    @param radius - radius of circle
    @return [longitude, latitude] - array consists of longitude and latitude of the random coordinates inside the circle
    """
    y0 = center.latitude
    x0 = center.longitude
    rd = radius / 111300

    u = random.uniform(0, 1)
    v = random.uniform(0, 1)

    w = rd * math.sqrt(u)
    t = 2 * math.pi * v
    x = w * math.cos(t)
    y = w * math.sin(t)

    latitude = y+y0
    longitude = x +x0
    return [longitude,latitude] 

def distance(lat1, lon1, lat2, lon2):
     """ 
    Find the distance between 2 coordinates
    @param lat1,lon1 - latitude and longitude of first coordinate
    @param lat2,lon2 - latitude and longitude of second coordinate
    @return distance - distance of the 2 coordinates in meters
    """
    R = 6371000
    a = 0.5 - math.cos((lat2 - lat1) * math.pi / 180) / 2 + math.cos(lat1 * math.pi / 180) * math.cos(lat2 * math.pi / 180) * (1 - math.cos((lon2 - lon1) * math.pi / 180)) / 2
    return R * 2 * math.asin(math.sqrt(a))