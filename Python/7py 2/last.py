"""
|--------------------------------------------------------------------------
| Sort by Last Char
|--------------------------------------------------------------------------
|
"""

def last(s):
   return sorted(s.split(), key=lambda x: x[-1])


def last(s):
   return [val for _, val in sorted(enumerate(s.split()), key=lambda x: (x[1][-1], x[0]))]


from operator import itemgetter
def last(s):
   return sorted(s.split(), key=itemgetter(-1))


print(last("man i need a taxi up to ubud"), ["a", "need", "ubud", "i", "taxi", "man", "to", "up"])
print(last("take me to semynak"), ["take", "me", "semynak", "to"])