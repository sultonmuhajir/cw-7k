"""
|--------------------------------------------------------------------------
| Simple Fun #182: Happy "g"
|--------------------------------------------------------------------------
|
"""

from re import search, match, findall
def happy_g(s):
   return not search(r'(?<!g)g(?!g)', s)


def happy_g(s):
   return not match(r'(.*[^g]|^)g([^g].*|$)', s)


def happy_g(s):
   return all(len(i) > 1 for i in findall(r'g+', s))


print(happy_g("gg0gg3gg0gg"),True)
print(happy_g("gog"),False)
print(happy_g("ggg ggg g ggg"),False)
print(happy_g("A half of a half is a quarter."),True)
print(happy_g("good grief"),False)
print(happy_g("bigger is ggooder"),True)
print(happy_g("gggggggggg"),True)