"""
|--------------------------------------------------------------------------
| Functions of Integers on Cartesian Plane
|--------------------------------------------------------------------------
|
"""

def sumin(n):
   return (n * (n + 1) * (2 * n + 1)) / 6
def sumax(n):
   return (n * (n + 1) * (4 * n - 1)) / 6
def sumsum(n):
   return n * n * (n + 1)


def sumin(n):
   return sum(i**2 for i in xrange(n+1))
def sumax(n):
   return sum(i*(i*2-1) for i in xrange(n+1))
def sumsum(n):
   return sumin(n) + sumax(n)


print(sumin(5), 55)
print(sumin(6), 91)
print(sumin(8), 204)
print(sumax(8), 372)
print(sumsum(8), 576)
print(sumin(15), 1240)