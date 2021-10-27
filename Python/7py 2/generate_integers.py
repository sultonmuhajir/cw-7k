"""
|--------------------------------------------------------------------------
| Series of integers from 0 to n
|--------------------------------------------------------------------------
|
"""

def generate_integers(n):
   res = []
   for i in range(n+1):
      res.append(i)
   return res


def generateIntegers(n):
   return list(range(n + 1))


def generateIntegers(n):
   return [*range(n+1)]


def generateIntegers(n):
   return [a for a in range(n+1)]


print(generate_integers(3), [0, 1, 2, 3])