"""
|--------------------------------------------------------------------------
| Ordered Count of Characters
|--------------------------------------------------------------------------
|
"""


from collections import Counter
def ordered_count(inp):
   return list(Counter(inp).items())


def ordered_count(inp):
   return [(i, inp.count(i)) for i in sorted(set(inp), key=inp.index)]


def ordered_count(inp):
   return [(x, inp.count(x)) for x in list(dict.fromkeys(inp))]
   

print(ordered_count("abracadabra"), [
   ["a", 5],
   ["b", 2],
   ["r", 2],
   ["c", 1],
   ["d", 1],
])