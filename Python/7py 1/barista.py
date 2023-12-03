"""
|--------------------------------------------------------------------------
| Barista problem
|--------------------------------------------------------------------------
|
"""

def barista(coffees):
   coffees.sort()
   return sum(el * (len(coffees) - i) + 2 * i for i, el in enumerate(coffees))


from itertools import accumulate
def barista(coffees):
   return sum(accumulate( sorted(coffees), lambda a,c: a+2+c))


def barista(coffees):
   coffees = list(sorted(coffees))
   curr, total = 0, 0
   for t in coffees:
      curr += t + (2 if curr else 0)
      total += curr
   return total


print(barista([2,10,5,3,9]), 85)
print(barista([4,3,2]),22)
print(barista([20,5]),32)
print(barista([20,5,4,3,1,5,7,8]),211)
print(barista([5,4,3,2,1]),55)