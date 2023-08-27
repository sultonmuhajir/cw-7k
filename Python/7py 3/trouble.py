"""
|--------------------------------------------------------------------------
| Double Trouble
|--------------------------------------------------------------------------
|
"""

def trouble(x, t):
   res = [x[0]]
   for i in range(1, len(x)):
      if res[-1] + x[i] != t: res.append(x[i])
   return res


def trouble(arr, t):
   i = 0
   while i < len(arr)-1:
      if arr[i] + arr[i+1] == t: del arr[i+1]
      else: i += 1
   return arr


def trouble(x, t):        
   for i, j in enumerate(zip(x,x[1:]),1):                      
      if sum(j) == t:            
         x.pop(i)
         return trouble(x,t)             
   return x


print(trouble([1, 3, 5, 6, 7, 4, 3], 7), [1, 3, 5, 6, 7, 4]);
print(trouble([4, 1, 1, 1, 4], 2), [4, 1, 4]);
print(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
print(trouble([2, 6, 2], 8), [2, 2]);