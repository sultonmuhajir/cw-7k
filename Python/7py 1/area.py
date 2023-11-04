"""
|--------------------------------------------------------------------------
| Find the area of the rectangle!
|--------------------------------------------------------------------------
|
"""

def area(d, l):
   return  round((d ** 2 - l ** 2) ** 0.5 * l, 2) if d > l else "Not a rectangle"


def area(d, l): 
   return "Not a rectangle" if d<=l else round( l*(d*d-l*l)**.5, 2)


from math import sqrt
def area (diagonal, side):
   if diagonal <= side: return 'Not a rectangle'
   return round(sqrt(diagonal ** 2 - side ** 2) * side, 2)


print(area(5, 4), 12)
print(area(10, 6), 48)
print(area(13, 5), 60)
print(area(12, 5), 54.54)