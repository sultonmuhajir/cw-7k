"""
|--------------------------------------------------------------------------
| Maximum Triplet Sum (Array Series #7)
|--------------------------------------------------------------------------
|
"""

def max_tri_sum(numbers):
   return sum(list(reversed(sorted(dict.fromkeys(numbers))))[slice(0, 3)])


def max_tri_sum(numbers):
   return sum(sorted(set(numbers))[-3:])


def max_tri_sum(numbers):
   res = []
   while len(res) < 3:
      x = max(numbers)
      if x not in res:
         res.append(x)
      numbers.remove(x)
   return sum(res)


def max_tri_sum(numbers):
   return sum( sorted([x for x in set(numbers)])[-3:] )


print(max_tri_sum([2,9,13,10,5,2,9,5]),32)
print(max_tri_sum([2,1,8,0,6,4,8,6,2,4]),18)
print(max_tri_sum([-3,-27,-4,-2,-27,-2]),-9)