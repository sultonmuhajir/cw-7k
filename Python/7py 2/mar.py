"""
|--------------------------------------------------------------------------
| Debug the functions EASY
|--------------------------------------------------------------------------
|
"""

from math import prod
def multi(arr):
   return prod(arr)


def add(arr):
   return sum(arr)


def reverse(string):
   return string[::-1]


print(multi([8,2,5]),80)
print(add([1,15,3]),19)
print(add([7,8,6,5,4,9]),39)
print(reverse("Hello World"),"dlroW olleH")