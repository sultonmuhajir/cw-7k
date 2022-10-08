"""
|--------------------------------------------------------------------------
| Compare Strings by Sum of Chars
|--------------------------------------------------------------------------
|
"""

def compare(s1,s2):
   res = lambda i: sum(map(ord,i.upper())) if i and i.isalpha() else ''
   return res(s1) == res(s2)


def compare(s1, s2):
   return len(set(sum(map(ord, x.upper() if x and x.isalpha() else '')) for x in [s1, s2])) == 1


def compare(s1,s2):
   a, b =  (sum(ord(c) for c in s.upper()) for s in (s1, s2) if s.isalpha())
   return a == b


print(compare("AD", "BC"), True)
print(compare("AD", "DD"), False)
print(compare("gf", "FG"), True)
print(compare("zz1", ""), True)