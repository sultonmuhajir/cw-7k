"""
|--------------------------------------------------------------------------
| How many are smaller than me?
|--------------------------------------------------------------------------
|
"""

def smaller(arr):
   return [sum(x > y for y in arr[i:]) for i, x in enumerate(arr)]


def smaller(arr):
   if len(arr)==1:return [0]
   cnt =  0;
   for i in arr[1:]:
      if arr[0]>i: cnt+=1
   return [cnt]+smaller(arr[1:])


def smaller(arr):
   return [len([a for a in arr[i:] if a < arr[i]]) for i in range(0, len(arr))]


print(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0])
print(smaller([1, 2, 3]), [0, 0, 0])
print(smaller([1, 2, 0]), [1, 1, 0])
print(smaller([1, 2, 1]), [0, 1, 0])
print(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0])
print(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0])