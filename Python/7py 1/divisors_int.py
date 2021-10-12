"""
|--------------------------------------------------------------------------
| Find the divisors!
|--------------------------------------------------------------------------
|
"""

from math import floor
def divisors(integer):
   res = []
   for i in range(1, floor(integer / 2)+1):
      if (integer / i) % 1 == 0 and i != 1:
         res.append(i)
   return res if len(res) != 0 else f'{integer} is prime'


def divisors(integer):
   return [n for n in range(2, integer) if integer % n == 0] or '{} is prime'.format(integer)


def divisors(num):
   l = [a for a in range(2,num) if num%a == 0]
   if len(l) == 0:
      return str(num) + " is prime"
   return l


import math
def divisors(n):
   o = [i for i in range(2, int(math.ceil(n/2)+1)) if n%i==0]
   return o if len(o) > 0 else "%d is prime" % n


def divisors(n):
   result = [i for i in range(2,n) if n%i==0]
   return result if result else str(n)+' is prime'


print(divisors(15), [3,5])
print(divisors(253), [11,23])
print(divisors(24), [2,3,4,6,8,12])
print(divisors(25), [5])
print(divisors(13), "13 is prime")
print(divisors(3), "3 is prime")
print(divisors(29), "29 is prime")