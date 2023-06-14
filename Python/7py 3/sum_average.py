"""
|--------------------------------------------------------------------------
| Sum of Array Averages
|--------------------------------------------------------------------------
|
"""

from math import floor
def sum_average(arr):
   return floor(sum([sum(i)/len(i) for i in arr]))


def sum_average(x):
   return sum(sum(i)/len(i) for i in x) // 1


def sum_average(arr):
   avg = 0
   for lst in arr:
      avg += sum(lst) / len(lst)
   return floor(avg)


print(sum_average([[1, 2, 2, 1], [2, 2, 2, 1]]), 3)