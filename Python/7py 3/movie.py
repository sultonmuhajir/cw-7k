"""
|--------------------------------------------------------------------------
| Going to the cinema
|--------------------------------------------------------------------------
|
"""

from math import ceil
def movie(card, ticket, perc):
   res = 0
   while (ticket * res <= ceil(card)):
      res += 1
      card += ticket * perc ** res
   return res


def movie(card, ticket, perc):
   return next(n for n in range(9**99) if card + ticket*perc*(1-perc**n)/(1-perc) - ticket*n < -1)


def movie(card, ticket, perc, n = 1):
   while card + ticket*perc*(1-perc**n)/(1-perc) - ticket*n > -1: 
      n += 1
   return n


print(movie(500, 15, 0.9), 43)
print(movie(100, 10, 0.95), 24)