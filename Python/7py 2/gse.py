"""
|--------------------------------------------------------------------------
| Geometric Progression Sequence
|--------------------------------------------------------------------------
|
"""

def geometric_sequence_elements(a, r, n):
   res = []
   for i in range(n):
      res.append(str(a))
      a *= r
   return ', '.join(res)


def geometric_sequence_elements(a, r, n):
   return ", ".join(str(a * r**i) for i in range(n))


def geometric_sequence_elements(a, r, n):
   return f"{[a*(r**i) for i in range(n)]}"[1:-1]


print(geometric_sequence_elements(2, 3, 5), '2, 6, 18, 54, 162')
print(geometric_sequence_elements(2, 2, 10), '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024')
print(geometric_sequence_elements(1, -2, 10), '1, -2, 4, -8, 16, -32, 64, -128, 256, -512')