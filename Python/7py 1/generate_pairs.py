"""
|--------------------------------------------------------------------------
| Pairs of integers from m to n
|--------------------------------------------------------------------------
|
"""

def generate_pairs(m, n):
   return [(i, j) for i in range(m, n+1) for j in range(i, n+1)]


from itertools import combinations_with_replacement
def generate_pairs(m, n):
   return list(combinations_with_replacement(range(m,n+1),2))


def generate_pairs(m, n):
   res = []
   for i in range(m, n + 1):
      for j in range(i, n + 1): res.append([i, j])
   return res


print(generate_pairs(2,4),  [(2, 2),(2,3),(2,4),(3,3),(3,4),(4,4)])