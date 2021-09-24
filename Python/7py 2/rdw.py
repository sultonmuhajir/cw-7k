"""
|--------------------------------------------------------------------------
| Remove duplicate words
|--------------------------------------------------------------------------
|
"""

def remove_duplicate_words(s):
   arr = s.split(' ')
   res = []
   for i in range(len(arr)):
      if (arr[i] in res) == False:
         res.append(arr[i])
   return ' '.join(res)


def remove_duplicate_words(s):
   return ' '.join({i:0 for i in s.split()})


def remove_duplicate_words(s):
   return ' '.join(dict.fromkeys(s.split()))


def remove_duplicate_words(s):
   a=[]
   [a.append(v) for v in s.split(" ") if v not in a]
   return str(" ").join(a)


def remove_duplicate_words(s):
   return ' '.join(sorted(set(s.split()), key = s.index))


print(remove_duplicate_words("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta")
print(remove_duplicate_words("my cat is my cat fat"), "my cat is fat")