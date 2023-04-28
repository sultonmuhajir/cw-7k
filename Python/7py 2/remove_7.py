"""
|--------------------------------------------------------------------------
| Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
|--------------------------------------------------------------------------
|
"""

def remove(s):
   return " ".join(filter(lambda i: i.count("!") != 1, s.split()))


def remove(string):
   res = []
   for i in string.split(' '):
      if i.count('!') != 1:
         res.append(i)
   return ' '.join(res)


def remove(s):
   return ' '.join(w for w in s.split(' ') if w.count('!') != 1)


print(remove('Hi!'), '')
print(remove('Hi!!!'),'Hi!!!')
print(remove('!Hi'), '')
print(remove('!Hi!'), '!Hi!')
print(remove('Hi! Hi!'), '')
print(remove('!!!Hi !!hi!!! !hi') , '!!!Hi !!hi!!!')
print(remove('!Hi! ! !Hi!'), '!Hi! !Hi!')