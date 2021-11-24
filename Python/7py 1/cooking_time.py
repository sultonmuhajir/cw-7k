"""
|--------------------------------------------------------------------------
| Boiled Eggs
|--------------------------------------------------------------------------
|
"""

from math import ceil
def cooking_time(eggs):
   return ceil(eggs / 8) * 5


def cooking_time(eggs):
   return (eggs + 7) // 8 * 5


def cooking_time(eggs):
   res = 0
   while( eggs > 0 ):
      res += 5
      eggs -= 8
   return res


def cooking_time(eggs):
   return -(-eggs // 8)*5


def cooking_time(eggs):
   pots, rest = divmod(eggs, 8)
   return (pots + bool(rest)) * 5


print( cooking_time(0), 0)
print( cooking_time(5), 5)
print( cooking_time(10), 10)