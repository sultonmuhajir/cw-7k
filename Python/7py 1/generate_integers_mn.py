"""
|--------------------------------------------------------------------------
| Series of integers from m to n
|--------------------------------------------------------------------------
|
"""

def generate_integers(m, n): 
   res = []
   for i in range(m, n+1):
      res.append(i)
   return res


def generate_integers(m, n): 
   return list(range(m,n+1))


def generate_integers(m, n):
   return [i for i in range(m,n+1)]


def generate_integers(m, n): 
   return [*range(m, n + 1)]


print(generate_integers(2, 5))