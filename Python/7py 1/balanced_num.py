"""
|--------------------------------------------------------------------------
| Balanced Number (Special Numbers Series #1 )
|--------------------------------------------------------------------------
|
"""

from math import ceil
def balanced_num(number):
   x = ceil(len(str(number)) / 2 - 1)
   if x < 1: return "Balanced"
   else:
      res = 0
      for i in range(x):
         res += int(str(number)[i]) - int(str(number)[::-1][i])
      return "Balanced" if res == 0 else "Not Balanced"


def balanced_num(n):
   n, l = [int(x) for x in str(n)], len(str(n))
   return 'Balanced' if sum(n[0:l//2-(0 if l%2 else 1)]) == sum(n[l//2+1:l]) else "Not Balanced"


def balanced_num(number):
   stg = str(number)
   half = (len(stg) - 1) // 2
   diff = sum(int(stg[i]) - int(stg[-1-i]) for i in range(half))
   return "Not Balanced" if diff else "Balanced"


print(balanced_num(13), "Balanced")
print(balanced_num(1230987), "Not Balanced")
print(balanced_num(56239814), "Balanced")