"""
|--------------------------------------------------------------------------
| Love vs friendship
|--------------------------------------------------------------------------
|
"""

def words_to_marks(s):
   abj = list("abcdefghijklmnopqrstuvwxyz")
   count = 0
   for v in s: count += abj.index(v)+1
   return count


def words_to_marks(s):
   return sum(ord(c)-96 for c in s)


def words_to_marks(s):
   return sum('_abcdefghijklmnopqrstuvwxyz'.index(e) for e in s)


print(words_to_marks('attitude'), 100)
print(words_to_marks('friends'), 75)
print(words_to_marks('family'), 66)
print(words_to_marks('selfness'), 99)
print(words_to_marks('knowledge'), 96)