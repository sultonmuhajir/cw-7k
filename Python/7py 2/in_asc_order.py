"""
|--------------------------------------------------------------------------
| Are the numbers in order?
|--------------------------------------------------------------------------
|
"""

def in_asc_order(arr):
   return arr == sorted(arr)


def in_asc_order(arr):
   for i in range(len(arr)-1):
      if arr[i] >= arr[i+1] : 
         return False
   return True


def in_asc_order(a):
   return all(x < y for x, y in zip(a, a[1:]))


print(in_asc_order([1, 2, 3]), True)
print(in_asc_order([1, 3, 2]), False)