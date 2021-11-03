"""
|--------------------------------------------------------------------------
| Vowel Count
|--------------------------------------------------------------------------
|
"""

def getCount(sentence):
   return len(list(filter(lambda i: i == "a" or i == "i" or i == "u" or i == "e" or i == "o" , list(sentence))))


def getCount(inputStr):
   return sum(1 for let in inputStr if let in "aeiouAEIOU")


import re
def getCount(str):
   return len(re.findall('[aeiou]', str, re.IGNORECASE))


def getCount(s):
   return sum(c in 'aeiou' for c in s)


print(getCount("aeiou"), 5, f"Incorrect answer for \"aeiou\"")
print(getCount("y"), 0, f"Incorrect answer for \"y\"")
print(getCount("bcdfghjklmnpqrstvwxz y"), 0, f"Incorrect answer for \"bcdfghjklmnpqrstvwxz y\"")
print(getCount(""), 0, f"Incorrect answer for empty string")
print(getCount("abracadabra"), 5, f"Incorrect answer for \"abracadabra\"")