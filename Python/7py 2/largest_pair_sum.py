"""
|--------------------------------------------------------------------------
| Largest pair sum in array
|--------------------------------------------------------------------------
|
"""

def largest_pair_sum(numbers): 
   sort = list(reversed(sorted(numbers)))
   return sort[0] + sort[1]


def largest_pair_sum(numbers): 
   return sum(sorted(numbers)[-2:])


from heapq import nlargest
def largest_pair_sum(a):
   return sum(nlargest(2, a))


def largest_pair_sum(a): 
   return a.pop(a.index(max(a))) + a.pop(a.index(max(a)))


def largest_pair_sum(numbers): 
   return sorted(numbers)[-2]+max(numbers)


print(largest_pair_sum([10,14,2,23,19]), 42)
print(largest_pair_sum([-100,-29,-24,-19,19]), 0)
print(largest_pair_sum([1,2,3,4,6,-1,2]), 10)
print(largest_pair_sum([-10, -8, -16, -18, -19]), -18)