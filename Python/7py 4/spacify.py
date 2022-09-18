"""
|--------------------------------------------------------------------------
| Spacify
|--------------------------------------------------------------------------
|
"""

def spacify(s):
   return ' '.join(list(s))


def spacify(string):
   return " ".join(string)


def spacify(string):
   return string.replace('', ' ')[1:-1]


def spacify(s):
   return ' '.join(i for i in s)


print(spacify("hello world"),"h e l l o   w o r l d");
print(spacify("12345"),"1 2 3 4 5")
print(spacify(""),"")
print(spacify("a"),"a")
print(spacify("Pippi"),"P i p p i")