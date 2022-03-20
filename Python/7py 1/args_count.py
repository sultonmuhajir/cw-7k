"""
|--------------------------------------------------------------------------
| How many arguments
|--------------------------------------------------------------------------
|
"""

def args_count(*args, **kwargs):
   return len(args) + len(kwargs)


def args_count(*args, **kwargs):
   res = 0
   for x in args:
      res += 1
   for y in kwargs:
      res += 1
   return res


def args_count(*args, **kwargs):
   return len([*args, *kwargs])


print(args_count(100), 1)
print(args_count(100, 2, 3), 3)
print(args_count(32, a1=12), 2)
print(args_count(), 0)