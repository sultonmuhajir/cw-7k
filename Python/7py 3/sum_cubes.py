"""
|--------------------------------------------------------------------------
| Sum of Cubes
|--------------------------------------------------------------------------
|
"""

def sum_cubes(n):
   res = 0
   for i in range(1, n+1):
      res += i**3
   return res


def sum_cubes(n):
   return sum(i**3 for i in range(0,n+1))


def sum_cubes(n):
   return (n*(n+1)//2)**2


def sum_cubes(n: int) -> int:
   return sum(list(map(lambda _it: pow(_it, 3), range(n + 1))))


print(sum_cubes(1), 1)
print(sum_cubes(2), 9)
print(sum_cubes(3), 36)
print(sum_cubes(4), 100)
print(sum_cubes(10), 3025)
print(sum_cubes(123), 58155876)