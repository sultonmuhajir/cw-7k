"""
|--------------------------------------------------------------------------
| Find Duplicates
|--------------------------------------------------------------------------
|
"""

def duplicates(array):
   return [v for i, v in enumerate(array) if array[:i].count(v) == 1]


def duplicates(arr):
   res = []
   for i, x in enumerate(arr):
      if arr[:i + 1].count(x) > 1 and x not in res:
         res.append(x)
   return res


def duplicates(array):
   list1 = []
   list2 = []
   for i in array:
      if i not in list1: list1.append(i)
      elif i in list1 and i not in list2: list2.append(i)
   return list2


print(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']), [4, 3, 1])
print(duplicates([0, 1, 2, 3, 4, 5]), [])