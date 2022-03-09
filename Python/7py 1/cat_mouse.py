"""
|--------------------------------------------------------------------------
| Cat and Mouse - Easy Version
|--------------------------------------------------------------------------
|
"""

def cat_mouse(x):
   return "Escaped!" if len(x) > 5 else "Caught!"


def cat_mouse(x):
   return 'Escaped!' if x.count('.') > 3 else 'Caught!'


def cat_mouse(x:str)->str:
   return ['Caught!', 'Escaped!'][abs(x.index('m') - x.index('C')) > 4]


def cat_mouse(x):
   return ["Escaped!",  "Caught!"][x.count('.') <= 3]


print(cat_mouse('C....m'), "Escaped!")
print(cat_mouse('C..m'), "Caught!")
print(cat_mouse('C.....m'), "Escaped!")
print(cat_mouse('C.m'), "Caught!")
print(cat_mouse('m...C'), "Caught!")