"""
|--------------------------------------------------------------------------
| Exclamation marks series #8: Move all exclamation marks to the end of the sentence
|--------------------------------------------------------------------------
|
"""

from re import sub
def remove(s):
   return s.replace('!', '') + sub('[^!]', '', s)


def remove(s):
   return ''.join(sorted(s, key=lambda a: a == '!'))


def remove(s):
   return s.replace('!','') + s.count('!') * '!'


print(remove("Hi!"), "Hi!")
print(remove("Hi! Hi!"), "Hi Hi!!")
print(remove("Hi! Hi! Hi!"), "Hi Hi Hi!!!")
print(remove("Hi! !Hi Hi!"), "Hi Hi Hi!!!")
print(remove("Hi! Hi!! Hi!"), "Hi Hi Hi!!!!")