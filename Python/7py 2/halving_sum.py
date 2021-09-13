"""
|--------------------------------------------------------------------------
| Halving Sum
|--------------------------------------------------------------------------
|
"""

from math import floor
def halving_sum(n):
   return 1 if n == 1 else n + halving_sum(floor(n/2))


def halving_sum(n): 
   return n and n + halving_sum(n>>1)


def halving_sum(n):
   result = n
   while n >= 1:
      n //= 2
      result += n
   return result


def halving_sum(n):
   return n + halving_sum(n // 2) if n else 0


print(halving_sum(25),47)
print(halving_sum(127),247)