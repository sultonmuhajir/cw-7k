"""
|--------------------------------------------------------------------------
| By 3, or not by 3? That is the question . . .
|--------------------------------------------------------------------------
|
"""

def divisible_by_three(st): 
   return sum(list(map(lambda i: int(i), list(st)))) % 3 == 0


def divisible_by_three(st): 
   while len(st) > 1:
      st = str(sum(int(c) for c in st))
   return st in '0369'


def divisible_by_three(st): 
   return divisible_by_three(str(sum(map(int, st)))) if len(st) > 1 else st in '369'


from math import gcd
def divisible_by_three(st): 
   return gcd(sum(map(int, st)), 3) == 3


print(divisible_by_three('123'), True)
print(divisible_by_three('19254'), True)
print(divisible_by_three('88'), False)
print(divisible_by_three('33333333'), True)