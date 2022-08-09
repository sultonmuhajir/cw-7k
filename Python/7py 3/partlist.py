"""
|--------------------------------------------------------------------------
| Parts of a list
|--------------------------------------------------------------------------
|
"""

def partlist(arr):
   return [(' '.join(arr[slice(0, i+1)]), ' '.join(arr[slice(i+1, len(arr))])) for i in range(len(arr)-1)]


def partlist(arr):
   res, i = [], 0
   while (i < len(arr)):
      res.append((" ".join(map(lambda x : str(x), arr[0:i+1])), " ".join(map(lambda x : str(x), arr[i+1:]))))
      i += 1
   return res[0:-1]


def partlist(arr):
   return [(' '.join(arr[:i]), ' '.join(arr[i:])) for i in range(1, len(arr))]


print(partlist(["I", "wish", "I", "hadn't", "come"]),
   [("I", "wish I hadn't come"), ("I wish", "I hadn't come"), ("I wish I", "hadn't come"), ("I wish I hadn't", "come")])