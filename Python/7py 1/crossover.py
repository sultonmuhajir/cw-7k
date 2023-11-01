"""
|--------------------------------------------------------------------------
| Genetic Algorithm Series - #3 Crossover
|--------------------------------------------------------------------------
|
"""

def crossover(c1, c2, i):
   return [c1[:i]+c2[i:], c2[:i]+c1[i:]]


crossover = lambda c1, c2, i: [c1[:i] + c2[i:], c2[:i] + c1[i:]]


def crossover(chromosome1, chromosome2, index):
   return [chromosome1[:index] + chromosome2[index:], chromosome2[:index] + chromosome1[index:]]


print(crossover('111000', '000110', 3), ['111110', '000000']);