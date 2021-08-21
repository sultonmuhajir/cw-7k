"""
|--------------------------------------------------------------------------
| Find the next perfect square!
|--------------------------------------------------------------------------
|
"""

from math import sqrt
def find_next_square(sq):
   return (sqrt(sq) + 1) ** 2 if sqrt(sq) % 1 == 0 else -1


def find_next_square(sq):
   x = sq**0.5    
   return -1 if x % 1 else (x+1)**2


def find_next_square(sq):
   root = sq ** 0.5
   if root.is_integer():
      return (root + 1)**2
   return -1


def find_next_square(sq):
   if sq >= 0 and ((sq**0.5) % 1 == 0):
      return (sq**0.5+1)**2
   return -1


print(find_next_square(121), 144, "Wrong output for 121")
print(find_next_square(625), 676, "Wrong output for 625")
print(find_next_square(155), -1, "Wrong output for 155")
print(find_next_square(342786627), -1, "Wrong output for 342786627")