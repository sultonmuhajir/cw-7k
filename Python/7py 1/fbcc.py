"""
|--------------------------------------------------------------------------
| Fizz Buzz Cuckoo Clock
|--------------------------------------------------------------------------
|
"""

def fizz_buzz_cuckoo_clock(time):
   hour, minute = time.split(":")
   if int(minute) == 00:
      return ("Cuckoo " * (int(hour) % 12 or 12)).strip()
   elif int(minute) == 30: return "Cuckoo"
   elif int(minute) % 15 == 0: return "Fizz Buzz"
   elif int(minute) % 3 == 0: return "Fizz"
   elif int(minute) % 5 == 0: return "Buzz"
   else: return "tick"


def fizz_buzz_cuckoo_clock(time):
   h, m = map(int, time.split(':'))
   if m % 30 < 1:
      return ' '.join(['Cuckoo']*(m==30 or (h-1) % 12 + 1))
   else:
      return ('Fizz ' * (m % 3 < 1) + 'Buzz ' * (m % 5 < 1))[:-1] or 'tick'


def fizz_buzz_cuckoo_clock(time):
   hh, mm = map(int, time.split(":"))
   if   mm ==  0:     return " ".join(["Cuckoo"] * (hh % 12 or 12))
   elif mm == 30:     return "Cuckoo"
   elif mm % 15 == 0: return "Fizz Buzz"
   elif mm %  3 == 0: return "Fizz"
   elif mm %  5 == 0: return "Buzz"
   else:              return "tick"


print(fizz_buzz_cuckoo_clock("13:34"), "tick")
print(
   fizz_buzz_cuckoo_clock("21:00"),
   "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
)
print(fizz_buzz_cuckoo_clock("11:15"), "Fizz Buzz")
print(fizz_buzz_cuckoo_clock("03:03"), "Fizz")
print(fizz_buzz_cuckoo_clock("14:30"), "Cuckoo")
print(fizz_buzz_cuckoo_clock("08:55"), "Buzz")
print(
   fizz_buzz_cuckoo_clock("00:00"),
   "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
)
print(
   fizz_buzz_cuckoo_clock("12:00"),
   "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
)
print(fizz_buzz_cuckoo_clock("14:00"), "Cuckoo Cuckoo")