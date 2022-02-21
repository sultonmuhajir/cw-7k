"""
|--------------------------------------------------------------------------
| Minimum Steps (Array Series #6)
|--------------------------------------------------------------------------
|
"""

def minimum_steps(numbers, value):
   res = 0
   c = -1
   for i in sorted(numbers):
      if res < value:
         res += i
         c += 1
   return c


def minimum_steps(arr, n):
   arr = sorted(arr)
   s = 0
   for i,v in enumerate(arr): 
      s += v
      if s >= n: return i


from itertools import accumulate
def minimum_steps(numbers, value):
   return next(i for i, x in enumerate(accumulate(sorted(numbers))) if x >= value)


def minimum_steps(numbers, value):
   return sum(sum(sorted(numbers)[:i+1]) < value for i in range(len(numbers)))


print(minimum_steps([4,6,3], 7), 1)
print(minimum_steps([10,9,9,8], 17), 1)
print(minimum_steps([8,9,10,4,2], 23), 3)
print(minimum_steps([19,98,69,28,75,45,17,98,67], 464), 8)
print(minimum_steps([4,6,3], 2), 0)