"""
|--------------------------------------------------------------------------
| Nice Array
|--------------------------------------------------------------------------
|
"""

def is_nice(arr):
   res = 0
   for i in arr:
      if i+1 in arr or i-1 in arr:
         res += 1
   return len(arr) != 0 and res == len(arr)


def is_nice(arr):
   return len(arr) > 0 and all(n-1 in arr or n+1 in arr for n in arr)


def is_nice(arr):
   return bool(a := set(arr)) and next((False for n in a if (n + 1) not in a and (n - 1) not in a), True)


def is_nice(arr):
   s = set(arr)
   return bool(arr) and all( n+1 in s or n-1 in s for n in s)


print(is_nice([2,10,9,3]),True)
print(is_nice([]),False)