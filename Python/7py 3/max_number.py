"""
|--------------------------------------------------------------------------
| Form The Largest
|--------------------------------------------------------------------------
|
"""

def max_number(n):
   return int(''.join(list(reversed(sorted(str(n))))))


def max_number(digits):
   sorted_digits = sorted(str(digits), reverse = True)
   result = ""
   for member in sorted_digits:
      result += str(member)
   return int(result)


def max_number(n):
   return int(''.join(sorted(str(n), reverse=True)))


def max_number(n):
   return int("".join(sorted(str(n))[::-1]))


print(max_number(213), 321)
print(max_number(7389), 9873)
print(max_number(63792), 97632)
print(max_number(566797), 977665)
print(max_number(1000000), 1000000)