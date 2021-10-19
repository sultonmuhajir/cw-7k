"""
|--------------------------------------------------------------------------
| Simple Fun #176: Reverse Letter
|--------------------------------------------------------------------------
|
"""

import re
def reverse_letter(string):
   return ''.join(list(reversed(list(filter(lambda i: re.match("[a-z]", i) , string)))))


def reverse_letter(s):
   return ''.join([i for i in s if i.isalpha()])[::-1]


def reverse_letter(string):
   return ''.join(filter(str.isalpha, reversed(string)))


import re
def reverse_letter(string):
   return re.sub("[^a-zA-Z]","",string)[::-1]


def reverse_letter(s):
   return ''.join(filter(str.isalpha, s))[::-1]


print(reverse_letter("krishan"),"nahsirk")
print(reverse_letter("ultr53o?n"),"nortlu")
print(reverse_letter("ab23c"),"cba")
print(reverse_letter("krish21an"),"nahsirk")