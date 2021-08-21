"""
|--------------------------------------------------------------------------
| Shortest Word
|--------------------------------------------------------------------------
|
"""

def find_short(s):
   arr = s.split(' ')
   minn = len(arr[0])
   for i in range(len(arr)):
      for j in range(len(arr[i])):
         res = len(arr[i])
      if res < minn:
         minn = res
   return minn


def find_short(s):
   return min(len(x) for x in s.split())


def find_short(s):
   return len(min(s.split(' '), key=len))


def find_short(s):
   return min(map(len, s.split(' ')))


def find_short(s):
   return len(sorted(s.split(), key=len)[0])


print(find_short("bitcoin take over the world maybe who knows perhaps"), 3)
print(find_short("turns out random test cases are easier than writing out basic ones"), 3)
print(find_short("lets talk about javascript the best language"), 3)
print(find_short("i want to travel the world writing code one day"), 1)
print(find_short("Lets all go on holiday somewhere very cold"), 2)   
print(find_short("Let's travel abroad shall we"), 2)