"""
|--------------------------------------------------------------------------
| Growth of a Population
|--------------------------------------------------------------------------
|
"""

def nb_year(p0, percent, aug, p):
   if p0 >= p: return 0
   return 1 + nb_year(int(p0) * (1+percent/100) + aug, percent, aug, p);   


def nb_year(p0, percent, aug, p):
   count = 0
   while(p > p0):
      p0 = int(p0 + (percent / 100) * p0 + aug)
      count += 1
   return count


from itertools import accumulate
def nb_year(p0, pct, aug, p):
   return next(i for i, x in enumerate(accumulate([p0] * 1000, lambda px, _: px + .01 * pct * px + aug)) if x >= p)


def nb_year(p0, percent, aug, p):
   year = 0
   while True:
      if p0 >= p:
         return year
      p0 = p0 + aug + p0*percent/100
      year +=1


print(nb_year(1500, 5, 100, 5000), 15)
print(nb_year(1500000, 2.5, 10000, 2000000), 10)
print(nb_year(1500000, 0.25, 1000, 2000000), 94)