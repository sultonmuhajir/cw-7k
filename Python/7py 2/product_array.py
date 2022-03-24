"""
|--------------------------------------------------------------------------
| Product of Array Items
|--------------------------------------------------------------------------
|
"""

from math import prod
def product(numbers):
   return None if numbers == None or len(numbers) == 0 else prod(numbers)


def product(numbers):
   if numbers:
      res = 1
      for i in numbers:
         res *= i
      return res


def product(numbers):
   if numbers: return eval('*'.join(map(str,numbers)))


from functools import reduce
def product(numbers):
   if numbers: return reduce(lambda x, y: x * y, numbers)


print(product([5, 4, 1, 3, 9]), 540)
print(product([-2, 6, 7, 8]), -672)
print(product([10]), 10)
print(product([0, 2, 9, 7]), 0)
print(product(None), None)
print(product([]), None)