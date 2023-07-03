"""
|--------------------------------------------------------------------------
| Driving Licence
|--------------------------------------------------------------------------
|
"""

from dateutil import parser
def driver(data):
   birth = data[3].split("-")
   month = str(parser.parse(birth[1]).month).zfill(2)
   a = (data[2].upper() + "99999")[:5] + birth[2][2]
   b = month if data[4] == "M" else str(int(month) + 50)
   c = birth[0] + birth[2][3] + data[0][0] + (data[1] or "9")[0] + "9AA"
   return a + b + c


from datetime import datetime
def driver(data):
   first, middle, last, dob, gender = data
   try: d = datetime.strptime(dob, '%d-%b-%Y')
   except ValueError: d = datetime.strptime(dob, '%d-%B-%Y')
   return '{:9<5}{[2]}{:0>2}{:0>2}{[3]}{[0]}{[0]}9AA'.format(
      last[:5].upper(),
      str(d.year),
      d.month + (50 if gender == 'F' else 0),
      d.day,
      str(d.year),
      first,
      middle if middle else '9')


from calendar import month_abbr
def driver(data):
   surn = data[2].ljust(5, '9')[:5].upper()
   day, month, year = data[3].split('-')
   seven = str(list(month_abbr).index(month[:3])).rjust(2,'0')
   if data[-1] == 'F': seven = str(int(seven[0]) + 5) + seven[-1]
   abbr = ''.join((data[0][0], data[1][0] if data[1] else '')).ljust(2, '9')
   return ''.join([surn, year[-2], seven, day, year[-1], abbr, '9AA' ])


print(driver(["Johanna", "", "Gibbs", "13-Dec-1981", "F"]), "GIBBS862131J99AA")
print(driver(["Andrew", "Robert", "Lee", "02-September-1981", "M"]), "LEE99809021AR9AA")