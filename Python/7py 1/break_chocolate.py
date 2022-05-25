"""
|--------------------------------------------------------------------------
| Breaking chocolate problem
|--------------------------------------------------------------------------
|
"""

def break_chocolate(n, m):
   return max(n*m-1, 0)


def breakChocolate(n, m):
   return 0 if n*m==0 else n*m-1


def breakChocolate(n, m):
   return n*m-1 if n and m else 0


print(break_chocolate(5, 5), 24)
print(break_chocolate(7, 4), 27)
print(break_chocolate(1, 1), 0)