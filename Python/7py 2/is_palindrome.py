"""
|--------------------------------------------------------------------------
| Palindrome Strings
|--------------------------------------------------------------------------
|
"""

def is_palindrome(string):
   return str(string) == ''.join(list(reversed(str(string))))


def is_palindrome(string):
   return str(string) == str(string)[::-1]


def is_palindrome(string):
   s = str(string)
   while len(s) > 1:
      if s[0] == s[-1]:
         s = s[1:-1]
      else:
         return 0
   return 1


def is_palindrome(string):
   for i in range(len(str(string))//2):
      if str(string)[i] != str(string)[-(i+1)]:
         return False
   return True


print(is_palindrome("anna"), True)
print(is_palindrome("walter"), False)
print(is_palindrome(12321), True)
print(is_palindrome(123456), False)