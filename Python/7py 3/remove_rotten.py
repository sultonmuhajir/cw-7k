"""
|--------------------------------------------------------------------------
| Help the Fruit Guy
|--------------------------------------------------------------------------
|
"""

def remove_rotten(x):
   return list(map(lambda i: i.replace('rotten', '').lower(), x)) if x else []


def remove_rotten(fruits):
   return [f.replace('rotten', '').lower() for f in fruits or []]


def remove_rotten(bag):
   return [ fruit[6:].lower() if 'rotten' in fruit else fruit for fruit in bag] if bag else []


from re import sub
def remove_rotten(x):
   return [sub('rotten', '', fruit).lower() for fruit in x] if x is not None else []


print(remove_rotten(["rottenApple","rottenBanana","rottenApple","rottenPineapple","rottenKiwi"]), ["apple","banana","apple","pineapple","kiwi"])
print(remove_rotten([]), [])
print(remove_rotten(None), [])