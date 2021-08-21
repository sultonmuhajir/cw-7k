"""
|--------------------------------------------------------------------------
| Disemvowel Trolls
|--------------------------------------------------------------------------
|
"""

def disemvowel(str):
   string = ""
   for i in range(len(str)):
      if (str[i] != "a" and str[i] != "i" and str[i] != "u" and str[i] != "e" and str[i] != "o" and str[i] != "A" and str[i] != "I" and str[i] != "U" and str[i] != "E" and str[i] != "O"):
         string += str[i]
   return string


def disemvowel(s):
   return s.translate(None, "aeiouAEIOU")


def disemvowel(string):
   return "".join(c for c in string if c.lower() not in "aeiou")


import re
def disemvowel(string):
   return re.sub(r"[aeiouAEIOU]", "", string)


print(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")