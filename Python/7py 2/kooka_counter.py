"""
|--------------------------------------------------------------------------
| Kooka-Counter
|--------------------------------------------------------------------------
|
"""

from re import findall
def kooka_counter(laughing):
   return len(findall(r'(.a)\1+', laughing))


def kooka_counter(laughing):
   return 0 if laughing == '' else laughing.count('Hah') + laughing.count('haH') + 1


def kooka_counter(laughing):
   return len(findall(r'(ha)+|(Ha)+',laughing))


def kooka_counter(_l):
   return bool(_l) + _l.count("Haha") + _l.count("haHa")


print(kooka_counter(""), 0)
print(kooka_counter("hahahahaha"), 1)
print(kooka_counter("hahahahahaHaHaHa"), 2)
print(kooka_counter("HaHaHahahaHaHa"), 3)