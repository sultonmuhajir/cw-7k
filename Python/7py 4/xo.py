"""
|--------------------------------------------------------------------------
| Exes and Ohs
|--------------------------------------------------------------------------
|
"""

def xo(s):
   x = list(filter(lambda i: i == 'x' , s.lower()))
   o = list(filter(lambda i: i == 'o' , s.lower()))
   return len(x) == len(o)


def xo(s):
   return s.lower().count('x') == s.lower().count('o')


def xo(s):
   return sum([-1 if c=='o' else (1 if c=='x' else 0) for c in s.lower()])==0


def xo(s):
   return len(s.translate(None, 'Xx')) == len(s.translate(None, 'Oo'))


print(xo('xo'), 'True expected')
print(xo('xo0'), 'True expected')