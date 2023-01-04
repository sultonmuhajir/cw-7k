"""
|--------------------------------------------------------------------------
| Heron's formula
|--------------------------------------------------------------------------
|
"""

from math import sqrt
def heron(a,b,c):
   x = (a+b+c)/2
   return round(sqrt(x*(x-a)*(x-b)*(x-c)), 2)


def heron(a, b, c):
   s = (a + b + c) / 2
   return round((s * (s - a) * (s - b) * (s - c)) ** 0.5, 2)


def heron(a,b,c):
   return round((1/4)*(4*b*b*c*c-(b*b+c*c-a*a)**2)**(1/2),2)


def heron(a,b,c):
   return round(.25*(4*(b*c)**2-(b*b+c*c-a*a)**2)**.5, 2)


print(heron(3, 4, 5), 6)