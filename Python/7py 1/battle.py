"""
|--------------------------------------------------------------------------
| Battle of the characters (Easy)
|--------------------------------------------------------------------------
|
"""

def battle(x, y):
   num_x = sum([ord(_)-64 for _ in list(x)])
   num_y = sum([ord(_)-64 for _ in list(y)])
   return x if num_x > num_y else y if num_x < num_y else "Tie!"


def battle(x, y):
   res = lambda word: sum(ord(i)-64 for i in word)
   return x if res(x) > res(y) else y if res(y) > res(x) else 'Tie!'


def battle(x, y):
   a, b = tuple(sum(map(lambda c: ord(c)-64, n)) for n in (x, y))
   return x if a > b else y if b > a else 'Tie!'


print(battle("AAA", "Z"), "Z")
print(battle("ONE", "TWO"), "TWO")
print(battle("ONE", "NEO"), "Tie!")
print(battle("FOUR", "FIVE"), "FOUR")