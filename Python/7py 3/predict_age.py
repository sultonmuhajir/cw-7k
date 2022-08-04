"""
|--------------------------------------------------------------------------
| Predict your age!
|--------------------------------------------------------------------------
|
"""

from math import sqrt, floor
def predict_age(*ages):
   res = 0
   for age in ages: res += age ** 2
   return floor(sqrt(res) / 2) or 0


def predict_age(*age):
   return sum(a*a for a in age) ** 0.5 // 2


def predict_age(*age):
   return sum([i**2 for i in age])**.5//2


print(predict_age(65,60,75,55,60,63,64,45), 86)