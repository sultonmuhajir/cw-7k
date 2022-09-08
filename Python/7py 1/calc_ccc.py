"""
|--------------------------------------------------------------------------
| Char Code Calculation
|--------------------------------------------------------------------------
|
"""

def calc(x):
   return len(list(filter(lambda i: i == '7', list(''.join(list(map(lambda i: str(ord(i)), list(x)))))))) * 6


def calc(x):
   return x.join(str(ord(i)) for i in x).count('7') * 6


def calc(x):
   res = 0
   for i in x:
      if ord(i) % 10 == 7:
         res+=6
   return res


def calc(x):
   return sum(6 for c in ''.join(map(str, map(ord, x))) if c== '7')


print(calc('abcdef'), 6)
print(calc('ifkhchlhfd'), 6) 
print(calc('aaaaaddddr'), 30) 
print(calc('jfmgklf8hglbe'), 6)
print(calc('jaam'), 12)