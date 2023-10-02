"""
|--------------------------------------------------------------------------
| Simple Fun #144: Distinct Digit Year
|--------------------------------------------------------------------------
|
"""

def distinct_digit_year(year):
   x = 0
   while x != 4:
      year += 1
      arr = list(str(year))
      res = [arr.count(i) for i in arr]
      x = sum(res)
      if x == 4: return year


def distinct_digit_year(year):
   year += 1
   while len(set(str(year))) != 4: year += 1
   return year


from re import match
def distinct_digit_year(year):
   return year + 1 if match(r'(?:([0-9])(?!.*\1)){4}', str(year + 1)) else distinct_digit_year(year + 1)


print(distinct_digit_year(1987), 2013)
print(distinct_digit_year(2013), 2014)