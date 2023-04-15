"""
|--------------------------------------------------------------------------
| Computer problem series #1: Fill the Hard Disk Drive
|--------------------------------------------------------------------------
|
"""

def save(sizes, hd):
   totalSize = 0
   res = 0
   for i in range(len(sizes)):
      if totalSize + sizes[i] <= hd:
         totalSize += sizes[i]
         res += 1
      else: break
   return res


def save(sizes, hd): 
   for i,s in enumerate(sizes):
      if hd < s: return i
      hd -= s
   return len(sizes)


from bisect import bisect
from itertools import accumulate
def save(sizes, hd): 
   return bisect(list(accumulate(sizes)), hd)


print(save([4,4,4,3,3], 12), 3)
print(save([4,4,4,3,3], 11), 2)
print(save([4,8,15,16,23,42], 108), 6)
print(save([13], 13), 1)