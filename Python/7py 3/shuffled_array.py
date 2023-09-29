"""
|--------------------------------------------------------------------------
| Simple Fun #87: Shuffled Array
|--------------------------------------------------------------------------
|
"""

def shuffled_array(s):
   for i in range(len(s)):
      arr = [x for j, x in enumerate(s) if j != i]
      if sum(arr) == s[i]: return sorted(arr)


def shuffled_array(s):
   s.remove(sum(s)//2)
   s.sort()
   return s


def shuffled_array(s):
   s.pop(s.index(sum(s) / 2))
   return sorted(s)


print(shuffled_array([1, 12, 3, 6, 2]),[1, 2, 3, 6])
print(shuffled_array([1, -3, -5, 7, 2]),[-5, -3, 2, 7])
print(shuffled_array([2, -1, 2, 2, -1]),[-1, -1, 2, 2])
print(shuffled_array([-3, -3]),[-3])