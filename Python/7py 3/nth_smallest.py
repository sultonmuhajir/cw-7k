"""
|--------------------------------------------------------------------------
| Nth Smallest Element (Array Series #4)
|--------------------------------------------------------------------------
|
"""

def nth_smallest(arr, pos):
   return sorted(arr)[pos-1]


def nth_smallest(arr, pos):
   for i in range(pos-1):
      arr.remove(min(arr))
   return min(arr)


def nth_smallest(arr, pos):
   item = None
   counter = 0
   while counter != pos:
      item = min(arr)
      arr.remove(item)
      counter += 1
   return item


def nth_smallest(arr, pos):
   result = 0
   for i in range(pos):
      result = arr.pop(arr.index(min(arr)))
   return result


print(nth_smallest([3,1,2],2),2)
print(nth_smallest([15,20,7,10,4,3],3),7)
print(nth_smallest([-5,-1,-6,-18],4),-1)
print(nth_smallest([-102,-16,-1,-2,-367,-9],5),-2)
print(nth_smallest([2,169,13,-5,0,-1],4),2)