"""
|--------------------------------------------------------------------------
| Two numbers are positive
|--------------------------------------------------------------------------
|
"""

def two_are_positive(*args):
   return len([i for i in args if i > 0]) == 2


def two_are_positive(a, b, c):
   return sum([a>0, b>0, c>0]) == 2


def two_are_positive(*args):
   return sum(x > 0 for x in args) == 2


print(two_are_positive(2, 4, -3), True)
print(two_are_positive(-4, 6, 8), True)
print(two_are_positive(4, -6, 9), True)
print(two_are_positive(-4, 6, 0), False)
print(two_are_positive(4, 6, 10), False)
print(two_are_positive(-14, -3, -4), False)