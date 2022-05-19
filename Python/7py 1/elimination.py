"""
|--------------------------------------------------------------------------
| Find twins
|--------------------------------------------------------------------------
|
"""

def elimination(arr):
   res = 0
   unq = list(set(arr))
   for i in unq:
      res += i if len(list(filter(lambda j: j == i, arr))) > 1 else 0
   return res if len(arr) != len(unq) else None


def elimination(arr):
   for x in arr:
      if arr.count(x) == 2:
         return x


def elimination(arr):
   s = set()
   return next((a for a in arr if a in s or s.add(a)), None)


def elimination(arr):
   try:
      return [i for i in arr if arr.count(i) > 1][0]
   except:
      pass


print(elimination([2, 5, 34, 1, 22, 1]), 1)
print(elimination([2, 2, 34, 1, 22]), 2)
print(elimination([2, 5, 34, 1, 22]), None)