"""
|--------------------------------------------------------------------------
| MinMinMax
|--------------------------------------------------------------------------
|
"""

def minMinMax(arr):
   for i in range(min(arr), max(arr)):
      if i not in arr:
         return [min(arr), i, max(arr)]


def minMinMax(arr):
   s, mi, ma = set(arr), min(arr), max(arr)
   return [mi, next(x for x in range(mi+1, ma) if x not in s), ma]


def minMinMax(arr):
   return [min(arr), min([i for i in range(min(arr), max(arr)) if i not in arr]), max(arr)]


def minMinMax(arr):
   a = sorted(arr)
   i = 0
   while abs(a[i] - a[i+1]) <= 1:
      i += 1
   return [a[0], a[i]+1, a[-1]]


print(minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24])
print(minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8])
print(minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9])