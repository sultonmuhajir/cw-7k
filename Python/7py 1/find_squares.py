"""
|--------------------------------------------------------------------------
| Find the Squares
|--------------------------------------------------------------------------
|
"""

from math import ceil, floor
def find_squares(num):
   return f'{ceil(num / 2) ** 2}-{floor(num / 2) ** 2}'


def find_squares(num):
   return f'{(m:=1+num>>1)*m}-{m*m-num}'


def find_squares(num):
   return f'{(-~num//2)**2}-{(num//2)**2}'


print(find_squares(9), '25-16')
print(find_squares(5), '9-4')
print(find_squares(7), '16-9')