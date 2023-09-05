"""
|--------------------------------------------------------------------------
| The reject() function
|--------------------------------------------------------------------------
|
"""

def reject(arr, predicate):
   return [x for x in arr if not predicate(x)]


reject = lambda s, p: [v for v in s if not p(v)]


def reject(seq, predicate):
   res = []
   for s in seq:
      if not predicate(s): res.append(s)
   return res


print(reject([1, 2, 3, 4, 5, 6], lambda x: x%2==0), [1, 3, 5])
print(reject(['a', 'b', 3, 'd'], lambda x: type(x)==int), ['a', 'b', 'd'])
print(reject(['a', 'b', 3, 'd'], lambda x: type(x)==str), [3])