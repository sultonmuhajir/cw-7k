"""
|--------------------------------------------------------------------------
| Especially Joyful Numbers
|--------------------------------------------------------------------------
|
"""

def number_joy(n):
   x = sum(list(map(lambda i: int(i), str(n))))
   y = int(''.join(list(reversed(str(x)))))
   return x*y == n


def numberJoy(n):
   s=sum(int(d) for d in str(n))
   return n==s*int(str(s)[::-1])


def number_joy(n):
   s = sum(map(int,list(str(n))))
   return s*int(str(s)[::-1]) == n


print(number_joy(1997), False, 'Not a Harshad number')
print(number_joy(1998), False, 'Harshad but digit sum=27, and 27x72 does not equal 1998')
print(number_joy(1729), True, 'Harshad and digit sum=19, and 19x91 = 1729')
print(number_joy(18), False, 'Harshad but digit sum=9, and 9x9 does not equal 18')