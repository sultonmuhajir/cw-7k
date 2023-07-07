"""
|--------------------------------------------------------------------------
| Find the stray number
|--------------------------------------------------------------------------
|
"""

import functools
def stray(arr):
   return functools.reduce(lambda a, b: a ^ b, arr)


def stray(arr):
   s = 0
   for n in arr:
      s^=n
   return s


def stray(arr):
   return min(arr, key=arr.count)


def stray(arr):
   for x in arr:
      if arr.count(x) == 1:
         return x


def stray(arr):
   return [x for x in set(arr) if arr.count(x) == 1][0]


print(stray([1, 1, 1, 1, 1, 1, 2]), 2)
print(stray([2, 3, 2, 2, 2]), 3)
print(stray([3, 2, 2, 2, 2]), 3)