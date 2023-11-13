"""
|--------------------------------------------------------------------------
| Simple Fun #13: Magical Well
|--------------------------------------------------------------------------
|
"""

def magical_well(a, b, n):
   res = 0
   for i in range(n):
      res += a * b
      a += 1
      b += 1
   return res


def magical_well(a, b, n):
   return sum((a + i) * (b + i) for i in range(n))


def magical_well(a, b, n):
   sum = 0
   while n:
      sum += a * b
      a += 1
      b += 1
      n -= 1
   return sum


print(magical_well(1,2,2) , 8)
print(magical_well(1,1,1) , 1)
print(magical_well(6,5,3) , 128)