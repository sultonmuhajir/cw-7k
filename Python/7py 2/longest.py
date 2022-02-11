"""
|--------------------------------------------------------------------------
| Two to One
|--------------------------------------------------------------------------
|
"""

def longest(a1, a2):
   return ''.join(sorted(set(a1+a2)))


def longest(s1, s2):
   longest = ""
   for i in s1: 
      if i not in longest:
         longest += i
   for i in s2:
      if i not in longest:
         longest += i 
   return ''.join(sorted(longest))


def longest(s1, s2):
   return ''.join(sorted(set(s1).union(s2)))


def longest(s1, s2):
   return "".join([x for x in "abcdefghijklmnopqrstuvwxyz" if x in s1+s2])


print(longest("aretheyhere", "yestheyarehere"), "aehrsty")
print(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
print(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")