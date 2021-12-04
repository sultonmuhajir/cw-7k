"""
|--------------------------------------------------------------------------
| Driving School Series #2
|--------------------------------------------------------------------------
|
"""

from math import ceil
def cost(mins):
   return ceil(max(0, mins - 65) / 30 + 3) * 10


def cost(n):
   n -= 5
   if n<60 : return 30
   n -= 60
   return 30 + ceil(n/30) * 10


def cost(mins):
   total = mins
   total -= 60
   price = 30
   while total > 5:
      total -= 30
      price += 10
   return price


def cost(mins):
   return max(0, -(-(mins - 65)//30)) * 10 + 30


def cost(mins):
   return 30 if mins<=60 else 30+10*int((mins-60+24)/30)


print(cost(45),30)
print(cost(63),30)
print(cost(84),40)
print(cost(102),50)
print(cost(273),100)