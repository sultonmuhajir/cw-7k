"""
|--------------------------------------------------------------------------
| Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
|--------------------------------------------------------------------------
|
"""

from re import sub
def remove(s):
   return sub(r'!+(?!!*$)', '', s)


def remove(s):
   num = 0
   for letter in s[::-1]:
      if letter != "!":
         break
      num += 1
   return s.replace("!", "") + "!" * num


def remove(s):
   return s.replace('!', '')+ '!'*(len(s)- len(s.rstrip('!')))


print(remove('Hi!'), 'Hi!')
print(remove('Hi!!!'),'Hi!!!')
print(remove('!Hi'), 'Hi')
print(remove('!Hi!'), 'Hi!')
print(remove('Hi! Hi!'), 'Hi Hi!')
print(remove('Hi'), 'Hi')