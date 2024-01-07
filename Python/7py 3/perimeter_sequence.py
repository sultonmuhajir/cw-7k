"""
|--------------------------------------------------------------------------
| Perimeter sequence
|--------------------------------------------------------------------------
|
"""

def perimeter_sequence(a, n): 
   return a * n * 4


perimeter_sequence = lambda a, n : 4 * a * n


def perimeterSequence(a, n):
   res = 0
   for i in range(n):
      res += 4 * a
   return res


def perimeter_sequence(a, n): 
   return a * n << 2


print(perimeter_sequence(1, 3), 12)