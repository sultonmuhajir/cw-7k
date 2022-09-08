"""
|--------------------------------------------------------------------------
| Form The Minimum
|--------------------------------------------------------------------------
|
"""

def min_value(digits):
   return int(''.join(list(map(lambda i: str(i), sorted(set(digits))))))


def min_value(digits):
   return int("".join(map(str,sorted(set(digits)))))


def minValue(digits):
   res = 0
   for i in sorted(set(digits)):
      res *= 10
      res += i
   return res


print(min_value([1, 3, 1]), 13)
print(min_value([4, 7, 5, 7]), 457)
print(min_value([4, 8, 1, 4]), 148)