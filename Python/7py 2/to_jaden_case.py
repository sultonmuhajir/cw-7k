"""
|--------------------------------------------------------------------------
| Jaden Casing Strings
|--------------------------------------------------------------------------
|
"""

def to_jaden_case(string):
   arr = string.split(" ")
   res = []
   for i in range(len(arr)):
      res.append((arr[i][0]).upper() + arr[i][1:])
   return ' '.join(res)


def toJadenCase(string):        
   return " ".join(w.capitalize() for w in string.split())


import string
def toJadenCase(NonJadenStrings):
   return string.capwords(NonJadenStrings)


quote = "How can mirrors be real if our eyes aren't real"
print(to_jaden_case(quote), "How Can Mirrors Be Real If Our Eyes Aren't Real")