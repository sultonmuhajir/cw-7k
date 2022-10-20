"""
|--------------------------------------------------------------------------
| Scaling Squared Strings
|--------------------------------------------------------------------------
|
"""

def scale(strng, k, v):
   return '\n'.join('\n'.join([''.join(j * k for j in i)] * v) for i in strng.splitlines())


def scale(string, k, n):
   if string == "":
      return ""
   s = []
   for i in string.split("\n"):
      for e in range(n):
         s.append("".join([j*k for j in i]))
   return "\n".join(s)


def scale(strng, k, n):
   if (strng == ''): 
      return ''
   horizontal = list(map(lambda word: ''.join((map(lambda char: char*k, word))),strng.split('\n')))
   vertical = '\n'.join(list(map(lambda word: '\n'.join([word for i in range(n)]), horizontal)))
   return vertical


print(scale("", 5, 5), "")
print(scale("Kj\nSH", 1, 2), "Kj\nKj\nSH\nSH")