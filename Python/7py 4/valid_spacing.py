"""
|--------------------------------------------------------------------------
| Valid Spacing
|--------------------------------------------------------------------------
|
"""

def valid_spacing(s):
   return '' not in s.split(' ') or s == ''


def valid_spacing(s):
   return s == ' '.join(s.split())


def valid_spacing(s):
   return s == s.strip() and '  ' not in s


print(valid_spacing('Hello world'),True)
print(valid_spacing(' Hello world'),False)
print(valid_spacing('Hello  world '),False)
print(valid_spacing(''),True)