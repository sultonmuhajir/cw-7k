"""
|--------------------------------------------------------------------------
| Return the first M multiples of N
|--------------------------------------------------------------------------
|
"""

def multiples(m, n):
   return [n*i for i in range(1, m+1)]


def multiples(m, n):
   res, count = [], 1
   while len(res)<m:
      res.append(n*count)
      count += 1
   return res   


def multiples(m, n):
   res = []
   for i in range(1, m+1):
      res.append(n*i)
   return res


print(multiples(3, 5), [5, 10, 15])