"""
|--------------------------------------------------------------------------
| Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
|--------------------------------------------------------------------------
|
"""

def product(s):
   return (len(s.split('!'))-1) * (len(s.split('?'))-1)


def product(s):
   return s.count("?")*s.count("!")


def product(s):
   return sum(1 for ch in s if ch == "!") * sum(1 for ch in s if ch == "?")


print(product(''),0)
print(product('!'),0)
print(product('!!??!!'),8)