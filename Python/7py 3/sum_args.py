"""
|--------------------------------------------------------------------------
| Sum of all arguments
|--------------------------------------------------------------------------
|
"""

def sum_args(*args):
   return sum(args)


sum_args = lambda *_:sum(_)


def sum_args(*args):
   res = 0
   for i in args:
      res += i
   return res


print(sum_args(1), 1)
print(sum_args(1, 2), 3)
print(sum_args(5, 7, 9), 21)