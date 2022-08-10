"""
|--------------------------------------------------------------------------
| Regex validate PIN code
|--------------------------------------------------------------------------
|
"""

from re import match, fullmatch
def validate_pin(pin):
   if len(pin) == 4 or len(pin) == 6:
      res = ''
      for i in pin:
         if match(r'\d+', i): 
            res += i
      return len(res) == 4 or len(res) == 6
   else:
      return False


def validate_pin(pin):
   return len(pin) in [4, 6] and pin.isdigit()


def validate_pin(pin):
   return bool(fullmatch("\d{4}|\d{6}", pin))


def validate_pin(pin):
   return match(r'(?:\d{4}|\d{6})\Z', pin) is not None


print(validate_pin("1234"), True)
print(validate_pin("12345"), False)
print(validate_pin("-1234"), False)
print(validate_pin("1.234"), False,)
print(validate_pin("a234"), False)
print(validate_pin("a234"), False)
print(validate_pin("0000"), True)
print(validate_pin("098765"), True)