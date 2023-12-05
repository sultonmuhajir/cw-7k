"""
|--------------------------------------------------------------------------
| Alan Partridge III - London
|--------------------------------------------------------------------------
|
"""

def alan(x):
   res = [i for i in ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"] if i in x]
   return "Smell my cheese you mother!" if len(res) == 4 else "No, seriously, run. You will miss it."


def alan(arr):
   return ('No, seriously, run. You will miss it.', 'Smell my cheese you mother!')[{'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'} <= set(arr)]


def alan(arr):
   s = {'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'}
   return "Smell my cheese you mother!" if s.issubset(arr) else "No, seriously, run. You will miss it."


print(alan(["Norwich", "Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway", "London"]), "Smell my cheese you mother!")
print(alan(["London", "Norwich"]), "No, seriously, run. You will miss it.")