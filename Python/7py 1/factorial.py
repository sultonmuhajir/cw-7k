"""
|--------------------------------------------------------------------------
| Factorial
|--------------------------------------------------------------------------
|
"""

def factorial(n):
   if n < 0 or n > 12: raise ValueError
   return n * factorial(n-1) if n else 1


def factorial(n):
   if n not in range(0, 13):
      raise ValueError('Error')
   return n * factorial(n - 1) if n else 1


def factorial(n):
   if 0 <= n <= 12:
      return n * factorial(n-1) if n else 1
   raise ValueError


print(factorial(0), 1)
print(factorial(1), 1)
print(factorial(2), 2)
print(factorial(3), 6)
print(factorial(13), 6)