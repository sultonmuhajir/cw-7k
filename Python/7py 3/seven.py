"""
|--------------------------------------------------------------------------
| A Rule of Divisibility by 7
|--------------------------------------------------------------------------
|
"""

def seven(m):
   n = 0
   while m > 99:
      m = m // 10 - 2 * (m % 10)
      n += 1
   return (m, n)


def seven(m, n = 0):
   return (m, n) if m < 100 else seven(int(str(m)[:-1]) - 2 * int(str(m)[-1]), n + 1)


def seven(m, i = 0):
   while m >= 100:
      return seven( int(str(m)[:-1]) - int(2 * int(str(m)[-1])) , i+1)
   return (m,i)


print(seven(1603), (7, 2))
print(seven(371), (35, 1))
print(seven(483), (42, 1))
print(seven(483595), (28, 4))