"""
|--------------------------------------------------------------------------
| Negation of a Value
|--------------------------------------------------------------------------
|
"""

def negation_value(s, val):
   return len(s) % 2 == (not val)


def negation_value(s, val):
   return len(s)&1 ^ bool(val)


def negation_value(str, val):
  return bool(not val if len(str) % 2 else val)


print(negation_value("!", False), True)
print(negation_value("!", True), False)
print(negation_value("!!!", []), True)