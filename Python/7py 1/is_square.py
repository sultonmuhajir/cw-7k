"""
|--------------------------------------------------------------------------
| You're a square!
|--------------------------------------------------------------------------
|
"""

from math import sqrt
def is_square(n):    
   return sqrt(n) % 1 == 0 if n >= 0 else False


def is_square(n):    
   return n >= 0 and (n**0.5) % 1 == 0


from math import sqrt
def is_square(n):    
   return n>=0 and sqrt(n).is_integer()


def is_square(n):    
   return str(n**(1.0/2.0))[-1] == '0'


print(is_square(-1), False, "-1: Negative numbers cannot be square numbers")
print(is_square( 0), True, "0 is a square number (0 * 0)")
print(is_square( 3), False, "3 is not a square number")
print(is_square( 4), True, "4 is a square number (2 * 2)")
print(is_square(25), True, "25 is a square number (5 * 5)")
print(is_square(26), False, "26 is not a square number")