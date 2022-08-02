"""
|--------------------------------------------------------------------------
| Deodorant Evaporator
|--------------------------------------------------------------------------
|
"""

def evaporator(content, evap_per_day, threshold):
   res = 0
   x = 100
   while x >= threshold:
      x -= (x * evap_per_day) / 100
      res += 1
   return res


from math import ceil, log
def evaporator(c, e, t):
   return ceil(log(t/100, 1-(e/100)))


def evaporator(content, evap_per_day, threshold):
   days = 0
   while (((1-evap_per_day/100)**days) > (threshold/100)):
      days += 1
   return days


print(evaporator(10, 10, 10), 22)