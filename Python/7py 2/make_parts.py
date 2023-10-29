"""
|--------------------------------------------------------------------------
| Cut array into smaller parts
|--------------------------------------------------------------------------
|
"""

def make_parts(arr, chunkSize):
   res = []
   for i in range(0, len(arr), chunkSize):
      res.append(arr[i:i + chunkSize])
   return res


def makeParts(arr, chunkSize):
   return [arr[i:i+chunkSize] for i in range(0, len(arr), chunkSize)]


def make_parts(arr, chunkSize):
   lst = []
   while arr:
      lst.append(arr[0:chunkSize])
      arr = arr[chunkSize:]
   return lst


print(make_parts([1,2,3,4,5], 2), [[1,2],[3,4],[5]])
print(make_parts([1,2,3], 1), [[1],[2],[3]])
print(make_parts([1,2,3,4,5], 10), [[1,2,3,4,5]])