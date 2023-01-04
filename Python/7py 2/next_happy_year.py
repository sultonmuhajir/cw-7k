"""
|--------------------------------------------------------------------------
| See You Next Happy Year
|--------------------------------------------------------------------------
|
"""

def next_happy_year(year):
   year += 1
   while len(set(str(year))) != 4:
      year += 1
   return year


def next_happy_year(year):
   return year+1 if len(set(str(year+1))) == 4 else next_happy_year(year+1)


def next_happy_year(year):
   while True:
      year+=1
      if len(str(year)) == len(set(str(year))):
         return year


print(next_happy_year(1001),1023)
print(next_happy_year(1123),1203)
print(next_happy_year(2001),2013)
print(next_happy_year(2334),2340)