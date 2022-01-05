"""
|--------------------------------------------------------------------------
| Minimize Sum Of Array (Array Series #1)
|--------------------------------------------------------------------------
|
"""

def min_sum(arr):
   res = 0
   array = sorted(arr)
   for i in range(int(len(array)/2)):
      res += array[i] * array[len(array) - (i + 1)]
   return res


def min_sum(arr):
   arr.sort()
   return sum(i * arr.pop() for i in arr)


def min_sum(arr):
   arr.sort()
   left, right, res = 0, len(arr) - 1, 0
   while left < right:
      res += arr[left] * arr[right]
      left += 1
      right -= 1
   return res


def min_sum(arr):
   a = sorted(arr)
   if len(a) == 0:
      return 0
   return (a[0]*a[-1]) + min_sum(a[1:-1])


print(min_sum([5,4,2,3]), 22)
print(min_sum([12,6,10,26,3,24]), 342)
print(min_sum([9,2,8,7,5,4,0,6]), 74)