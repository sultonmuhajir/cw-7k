"""
|--------------------------------------------------------------------------
| Product Of Maximums Of Array (Array Series #2)
|--------------------------------------------------------------------------
|
"""

from math import prod
def max_product(lst, n):
   return prod(sorted(lst, reverse=True)[slice(0, n)])


def max_product(lst, n, res = 1):
   for i in sorted(lst)[-n:]:
      res *= i
   return res


def max_product(lst, n_largest_elements):
   lst_largest = sorted(lst)[-n_largest_elements:]
   prod = 1
   for number in lst_largest:
      prod *= number
   return prod


def max_product(lst, n):
   lst.sort(reverse = True)
   i = 0
   sum = 1
   while i<n:
      sum = sum * lst[i]
      i += 1
   return sum


print(max_product([10, 2, 3, 8, 1, 10, 4], 5), 9600)
print(max_product([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375)
print(max_product([-4, -27, -15, -6, -1], 2), 4)