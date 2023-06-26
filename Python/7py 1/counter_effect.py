"""
|--------------------------------------------------------------------------
| Hit Count
|--------------------------------------------------------------------------
|
"""

def counter_effect(hit_count):
   return [[j for j in range(int(i)+1)] for i in hit_count]


def counter_effect(hit_count):
   return [range(int(i)+1) for i in hit_count]


def counter_effect(hit_count):
   return [list(xrange(int(a) + 1)) for a in hit_count]


print(counter_effect("1250"), [[0, 1], [0, 1, 2], [0, 1, 2, 3, 4, 5], [0]])
print(counter_effect("0050"), [[0], [0], [0, 1, 2, 3, 4, 5], [0]])
print(counter_effect('0000'), [[0], [0], [0], [0]])