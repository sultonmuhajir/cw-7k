"""
|--------------------------------------------------------------------------
| Get the Middle Character
|--------------------------------------------------------------------------
|
"""

from math import ceil
def get_middle(s):
   res = ceil(len(s)/2-1)
   return s[res:res+2] if len(s) % 2 == 0 else s[res:res+1]


def get_middle(s):
   return s[(len(s)-1)/2:len(s)/2+1]


def get_middle(s):
   index, odd = divmod(len(s), 2)
   return s[index] if odd else s[index - 1:index + 1]


def get_middle(s):
   i = (len(s) - 1) // 2
   return s[i:-i] or s


print(get_middle("test"),"es")
print(get_middle("testing"),"t")
print(get_middle("middle"),"dd")
print(get_middle("A"),"A")
print(get_middle("of"),"of")