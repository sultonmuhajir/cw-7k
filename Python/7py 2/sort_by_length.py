"""
|--------------------------------------------------------------------------
| Sort array by string length
|--------------------------------------------------------------------------
|
"""

def sort_by_length(arr):
   res = []
   x = sorted(list(map(lambda i: len(i), arr)))
   for i in x:
      for j in arr:
         if len(j) == i: res.append(j)
   return res


def sort_by_length(arr):
   return sorted(arr, key=len)


def sort_by_length(arr):
   words = {}
   for word in arr:
      words[int(len(word))]=word
   return [words[key] for key in sorted(words.keys())]


print(sort_by_length(["Beg", "Life", "I", "To"]), ["I", "To", "Beg", "Life"])
print(sort_by_length(["", "Moderately", "Brains", "Pizza"]), ["","Pizza","Brains","Moderately",])
print(sort_by_length(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"])