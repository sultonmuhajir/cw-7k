"""
|--------------------------------------------------------------------------
| Looking for a benefactor
|--------------------------------------------------------------------------
|
"""

from math import ceil
def new_avg(arr, newavg):
   res = ceil(newavg*(len(arr)+1)-sum(arr))    
   if res <= 0:
      raise ValueError('error')
   else:
      return res


def new_avg(arr, newavg):
   v = (newavg*(len(arr)+1)-sum(arr))
   if v < 0: raise ValueError
   return (int(v+1) if v>int(v) else round(v))


def new_avg(arr, newavg):
   res = ceil(newavg * (len(arr) + 1) - sum(arr))
   assert res > 0
   return res


print(new_avg([14, 30, 5, 7, 9, 11, 16], 90), 628);
print(new_avg([14, 30, 5, 7, 9, 11, 15], 92), 645);