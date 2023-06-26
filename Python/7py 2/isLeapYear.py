"""
|--------------------------------------------------------------------------
| Leap Years
|--------------------------------------------------------------------------
|
"""

def isLeapYear(year):
   return True if year % 400 == 0 else False if year % 100 == 0 else True if year % 4 == 0 else False


from calendar import isleap as isLeapYear


def isLeapYear(year):
   return (year % 100 != 0 and year % 4 == 0) or year % 400 == 0


isLeapYear = lambda y: (not y%4) * bool(y%100+(not y%400))


def is_leap_year(year):
   return (year % 100 and not year % 4) or not year % 400


print(isLeapYear(1984), True, 'Year 1984 was a leap year!')
print(isLeapYear(2000), True, 'Year 2000 was a leap year!')
print(isLeapYear(1234), False, 'Year 1234 was NOT a leap year!')
print(isLeapYear(1100), False, 'Year 1100 was NOT a leap year!')