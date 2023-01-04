"""
|--------------------------------------------------------------------------
| Simple consecutive pairs
|--------------------------------------------------------------------------
|
"""

def pairs(ar):
   count = 0
   for i in range(1,len(ar),2):
      if abs(ar[i]-ar[i-1]) == 1: count+=1
   return count


def pairs(arr):
   return sum(abs(a-b)==1 for a,b in zip(arr[::2],arr[1::2]))


def pairs(ar):
   return sum(1 for n in range(0, len(ar)-1, 2) if abs(ar[n] - ar[n+1]) == 1)


print(pairs([1,2,5,8,-4,-3,7,6]),3)
print(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2)
print(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0)
print(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4)
print(pairs([73, 72, 8, 9, 73, 72]),3)