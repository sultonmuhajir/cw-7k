"""
|--------------------------------------------------------------------------
| Reverse words
|--------------------------------------------------------------------------
|
"""

def reverse_words(text):
   res = []
   arr = text.split(" ")
   for i in range(len(arr)):
      res.append(''.join(reversed(list(arr[i]))))
   return ' '.join(res)


def reverse_words(str):
   return ' '.join(s[::-1] for s in str.split(' '))


import re
def reverse_words(str):
   return re.sub(r'\S+', lambda w: w.group(0)[::-1], str)


def reverse_words(text):
   text = text[::-1].split(' ')
   text.reverse()
   return ' '.join(text)


print(reverse_words('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god')
print(reverse_words('apple'), 'elppa')
print(reverse_words('a b c d'), 'a b c d')
print(reverse_words('double  spaced  words'), 'elbuod  decaps  sdrow')