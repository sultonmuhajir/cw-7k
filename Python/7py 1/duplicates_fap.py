"""
|--------------------------------------------------------------------------
| Find all pairs
|--------------------------------------------------------------------------
|
"""

def duplicates(arr):
   unq, res = set(arr), 0
   for i in unq:
      res = res + (arr.count(i)//2)
   return res


def duplicates(arr):
   return sum(arr.count(i)//2 for i in set(arr))
   

def duplicates(arr):
   i = 0
   for iter in arr:
      i += int(arr.count(iter)/2)/arr.count(iter)
   return round(i)


print(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]), 4)
print(duplicates([0, 0, 0, 0, 0, 0, 0]) , 3)
print(duplicates([]), 0)