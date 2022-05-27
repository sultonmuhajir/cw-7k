"""
|--------------------------------------------------------------------------
| Maximum Multiple
|--------------------------------------------------------------------------
|
"""

def max_multiple(divisor, bound):
   return bound - bound % divisor


def max_multiple(divisor, bound):
   return bound // divisor * divisor


def max_multiple(divisor, bound):
   return max([n for n in range(1, bound + 1) if n % divisor == 0])


print(max_multiple(2,7),6)
print(max_multiple(3,10),9)
print(max_multiple(7,17),14)