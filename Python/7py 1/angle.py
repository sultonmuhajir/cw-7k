"""
|--------------------------------------------------------------------------
| Sum of angles
|--------------------------------------------------------------------------
|
"""

def angle(n):
   return (n - 2) * 180


def angle(n):
   return (n+~1)*180


def angle(n):
   a = 360 / n
   b = 180 - a
   return round(b * n)


def angle(n):
   return max([(n-2)* 180])


print(angle(3), 180)
print(angle(4), 360)