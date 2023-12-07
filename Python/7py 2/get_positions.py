"""
|--------------------------------------------------------------------------
| Hands Up
|--------------------------------------------------------------------------
|
"""

def get_positions(s):
   return (s % 3, (s // 3) % 3, (s // 9) % 3)


def get_positions(n):
   n, x = divmod(n, 3)
   n, y = divmod(n, 3)
   n, z = divmod(n, 3)
   return x, y, z


def get_positions(n):
   return tuple((n // 3**i) % 3 for i in range(3))


print(get_positions(54), (0, 0, 0))
print(get_positions(98), (2, 2, 1))
print(get_positions(3), (0, 1, 0))