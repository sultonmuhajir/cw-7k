"""
|--------------------------------------------------------------------------
| Simple Fun #74: Growing Plant
|--------------------------------------------------------------------------
|
"""

from math import ceil
def growing_plant(u, d, x):
   return max(1, ceil((x - d) / (u - d)))


def growing_plant(upSpeed, downSpeed, desiredHeight):
   days = 1
   height = upSpeed
   while (height < desiredHeight):
      height += upSpeed - downSpeed
      days += 1
   return days


def growing_plant(upSpeed, downSpeed, desiredHeight):
   return max((desiredHeight - upSpeed - 1) // (upSpeed - downSpeed) + 1, 0) + 1


def growing_plant(upSpeed: int, downSpeed: int, desiredHeight: int) -> int:
   height, days = 0, 1
   while True:
      height += upSpeed
      if height >= desiredHeight:
            return days
      height -= downSpeed
      days += 1


print(growing_plant(100,10,910),10)
print(growing_plant(10,9,4),1)
print(growing_plant(5,2,0),1)
print(growing_plant(5,2,5),1)
print(growing_plant(5,2,6),2)