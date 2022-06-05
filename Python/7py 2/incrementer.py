"""
|--------------------------------------------------------------------------
| Incrementer
|--------------------------------------------------------------------------
|
"""

def incrementer(nums):
   res = []
   for i, v in enumerate(nums):
      res.append((v+i+1) % 10)
   return res


def incrementer(nums):
   return [(v+i)%10 for i,v in enumerate(nums,1)]


def incrementer(nums):
   return [int(str((a+i+1))[-1]) for a, i in enumerate(nums)]


print(incrementer([]), [])
print(incrementer([1, 2, 3]), [2, 4, 6])
print(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8])
print(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4])