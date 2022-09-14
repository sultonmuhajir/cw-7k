"""
|--------------------------------------------------------------------------
| Array Leaders (Array Series #3)
|--------------------------------------------------------------------------
|
"""

def array_leaders(numbers):
   return [v for i, v in enumerate(numbers) if v > sum(numbers[(i+1):])]


def array_leaders(n):
   res = []
   for i in range(len(n)):
      if n[i] > sum(n[i+1:]): res.append(n[i])
   return res


def array_leaders(arr):
   res = []
   while arr:
      temp = arr.pop(0)
      if temp > sum(arr): res.append(temp)
   return res


print(array_leaders([1,2,3,4,0]), [4])
print(array_leaders([16,17,4,3,5,2]), [17,5,2])