"""
|--------------------------------------------------------------------------
| Count salutes
|--------------------------------------------------------------------------
|
"""

def count_salutes(hallway):
   res, right = 0, 0
   for i in hallway:
      if i == ">": right += 1
      elif i == "<": res += right
   return res * 2


def count_salutes(hallway):
   return sum(hallway.count("<",i) for i,v in enumerate(hallway) if v==">")*2


def count_salutes(hallway):
   salutes = 0
   for index, c in enumerate(hallway):
      if c == ">":
         salutes += 2 * hallway[index:].count("<")
   return salutes


print(count_salutes('>--->---<--<'), 8)
print(count_salutes('<----<---<-->'), 0)
print(count_salutes('>-<->-<'), 6)