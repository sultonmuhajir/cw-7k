"""
|--------------------------------------------------------------------------
| Alphabet symmetry
|--------------------------------------------------------------------------
|
"""

def solve(arr):
   abj = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
   res = []
   for i, v in enumerate(arr):
      count = 0
      for i2, v2 in enumerate(v):
         if v2.lower() == abj[i2]: count += 1
      res.append(count)
   return res


def solve(arr):
   return [ sum(c == chr(97+i) for i,c in enumerate(v[:26].lower())) for v in arr ]


def solve(arr):
   return [sum(a==b for a, b in zip(v.lower(), 'abcdefghijklmnopqrstuvwxyz')) for v in arr]


def solve(arr):
   return [sum(i == ord(c) - ord('A') for i, c in enumerate(s.upper())) for s in arr]
   

print(solve(["abode","ABc","xyzD"]),[4,3,1])
print(solve(["abide","ABc","xyz"]),[4,3,0])
print(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6,5,7])
print(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3])