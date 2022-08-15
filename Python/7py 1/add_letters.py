"""
|--------------------------------------------------------------------------
| Alphabetical Addition
|--------------------------------------------------------------------------
|
"""

def add_letters(*letters):
   abj = "zabcdefghijklmnopqrstuvwxyz"
   return abj[sum([abj.index(v) for v in letters]) % 26]


def add_letters(*letters):
   return chr(96 + (sum(ord(l) - 96 for l in letters) % 26 or 26))


def add_letters(*letters):
   s = sum(122-ord(l) for l in letters)
   return chr(122 - s % 26)


print(add_letters("a", "b", "c"), "f")
print(add_letters("y", "c", "b"), "d")
print(add_letters(), "z")