"""
|--------------------------------------------------------------------------
| All Star Code Challenge #14 - Find the median
|--------------------------------------------------------------------------
|
"""

def median(array):
   arr = sorted(array)
   mid = int(len(array)/2)
   return (arr[mid-1] + arr[mid]) / 2 if len(array)%2==0 else arr[mid]


from statistics import median as median
from numpy import median


def median(array):
   array.sort()
   n = len(array)
   return (array[n // 2] + array[(n-1) // 2]) / 2


def median(array):
   ordered = sorted(array)
   n = len(array)
   i = n >> 1
   return (ordered[i] + ordered[n - i - 1]) / 2


print(median([1234,345,78]),345)
print(median([33,99,100,30,29,50]), 41.5)
print(median([3,50]), 26.5)