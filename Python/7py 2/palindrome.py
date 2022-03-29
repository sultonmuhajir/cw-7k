"""
|--------------------------------------------------------------------------
| Numerical Palindrome #1
|--------------------------------------------------------------------------
|
"""

def palindrome(num):
   return str(num) == str(num)[::-1] if type(num) == int and num >= 0 else "Not valid"


def palindrome(n):
   try:
      return 1. * n == int(str(n)[::-1])
   except:
      return "Not valid"


def palindrome(num):
   return "Not valid" if not isinstance(num, int) or num < 0 else str(num) == ''.join(reversed(str(num))) 


print(palindrome(1221), True)
print(palindrome(123322), False)
print(palindrome("ACCDDCCA"), "Not valid")
print(palindrome("1221"), "Not valid")
print(palindrome(-450), "Not valid")