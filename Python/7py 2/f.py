"""
|--------------------------------------------------------------------------
| Gauß needs help! (Sums of a lot of numbers).
|--------------------------------------------------------------------------
|
"""

def f(n):
   return None if type(n) != int or n % 1 != 0 or n <= 0 else ((n + 1) * n) / 2


def f(n):
   return int(n * (n + 1) / 2)


def f(n):
   return sum(range(1, n + 1)) if type(n) is int and n > 0 else None


def f(n):
   return ((n+1)/2)*n if isinstance(n,int) and n > 0 else None


print(f(1), 1)
print(f(100), 5050)