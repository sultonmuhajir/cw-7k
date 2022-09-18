"""
|--------------------------------------------------------------------------
| Greatest common divisor
|--------------------------------------------------------------------------
|
"""

def mygcd(x, y):
   return mygcd(y, x % y) if y else x


def mygcd(x,y):
   while y:
      x,y=y,x%y
   return x


from math import gcd as mygcd


print(mygcd(30,12),6)
print(mygcd(8,9),1)
print(mygcd(1,1),1)