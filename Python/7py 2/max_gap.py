"""
|--------------------------------------------------------------------------
| Maximum Gap (Array Series #4)
|--------------------------------------------------------------------------
|
"""

def max_gap(numbers):
   sort = sorted(numbers)
   return max([sort[i]-sort[i-1] for i in range(1, len(sort))])


from numpy import diff
def max_gap(numbers):
   return max(diff(sorted(numbers)))


def max_gap(numbers):
   lst = sorted(numbers)
   return max(b-a for a,b in zip(lst, lst[1:]))


print(max_gap([13,10,2,9,5]),4)
print(max_gap([13,3,5]),8)
print(max_gap([24,299,131,14,26,25]),168)