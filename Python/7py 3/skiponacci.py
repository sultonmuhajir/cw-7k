"""
|--------------------------------------------------------------------------
| The Skiponacci Sequence
|--------------------------------------------------------------------------
|
"""

def skiponacci(n):
   a, b, res = 1, 1, []
   for i in range(n):
      res.append(str(a) if i % 2 == 0 else "skip")
      if i % 2 == 0: a = a + b
      else: b = a + b
   return " ".join(res)


def skiponacci(n):
   fib = [1, 1][:n]
   for _ in range(n-2): fib.append(sum(fib[-2:]))
   return " ".join(str(n) if i % 2 else "skip" for i, n in enumerate(fib, 1))


def skiponacci(n):
   res = []
   a, b = 0, 1
   for i in range(n):
      a, b = a + b, a
      res.append('skip' if i%2 else str(a))
   return ' '.join(res)


print(skiponacci(1), "1")
print(skiponacci(5), "1 skip 2 skip 5")
print(skiponacci(7), "1 skip 2 skip 5 skip 13")