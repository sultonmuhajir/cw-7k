"""
|--------------------------------------------------------------------------
| Return the closest number multiple of 10
|--------------------------------------------------------------------------
|
"""

def closest_multiple_10(i):
   return round(i / 10) * 10


def closest_multiple_10(i):
   return round(i, -1)


def closest_multiple_10(i):
   return int(i/10+.5)*10


print(closest_multiple_10(54), 50)
print(closest_multiple_10(55), 60)