"""
|--------------------------------------------------------------------------
| Product Array (Array Series #5)
|--------------------------------------------------------------------------
|
"""

from numpy import prod
def product_array(numbers):
   return [prod(numbers)/i for i in numbers]


def product_array(numbers):
   prod = eval("*".join(map(str, numbers)))
   return [ prod / x for x in numbers ]


def product_array(numbers):
   res = 1
   for x in numbers: res *= x
   return [res // x for x in numbers]


print(product_array([12,20]), [20,12])
print(product_array([3,27,4,2]), [216,24,162,324])
print(product_array([13,10,5,2,9]), [900,1170,2340,5850,1300])
print(product_array([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320])