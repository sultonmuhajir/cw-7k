"""
|--------------------------------------------------------------------------
| Nothing special
|--------------------------------------------------------------------------
|
"""

from re import sub, findall
def nothing_special(s):
   return "Not a string!" if not isinstance(s, str) else sub(r'[^a-zA-Z0-9\s]', '', s)


def nothing_special(s):
   return "Not a string!" if type(s) != str else ''.join(findall(r'[0-9A-Za-z\s]',s))


def nothing_special(s):
   return "".join(x for x in s if x.isalnum() or x != x.strip()) if isinstance(s,str) else "Not a string!"


print(nothing_special("Hello World!"), "Hello World")
print(nothing_special("%^Take le$ft ##quad%r&a&nt"), "Take left quadrant")
print(nothing_special("M$$$$$$$y ally!!!!!"), "My ally")
print(nothing_special(25), "Not a string!")