"""
|--------------------------------------------------------------------------
| Nth power rules them all!
|--------------------------------------------------------------------------
|
"""

def modified_sum(a, n):
   return sum(list(map(lambda i: i ** n, a))) - sum(a)


def modified_sum(a, n):
   return sum([x ** n - x for x in a])


def modified_sum(a, n):
   return sum(i ** n for i in a) - sum(a)


def modified_sum(a, n):
   res = 0
   for x in a:
      res += x ** n - x
   return res


print(modified_sum([1, 2, 3], 3), 30)
print(modified_sum([1, 2], 5), 30)