"""
|--------------------------------------------------------------------------
| Numbers with this digit inside
|--------------------------------------------------------------------------
|
"""

from math import prod
def numbers_with_digit_inside(x, d):
   res = []
   for i in range(1, x+1):
      if str(i).find(str(d)) >= 0:
         res.append(i)
   return [0,0,0] if len(res) == 0 else [len(res), sum(res), prod(res)]


def numbers_with_digit_inside(x, d):
   answer = [0,0,1]
   for num in range(1,x + 1):
      if str(d) in str(num):
         answer[0] += 1
         answer[1] += num
         answer[-1] *= num
   return [0,0,0] if not answer[0] else answer


from functools import reduce
def numbers_with_digit_inside(x, d):
   arr = [i for i in range(1, x+1) if str(d) in str(i)]
   return [len(arr), sum(arr), len(arr) and reduce(lambda x, y:x*y, arr)]


print(numbers_with_digit_inside(5, 6), [0, 0, 0]),
print(numbers_with_digit_inside(7, 6), [1, 6, 6]),
print(numbers_with_digit_inside(11, 1), [3, 22, 110]),
print(numbers_with_digit_inside(20, 0), [2, 30, 200]),
print(numbers_with_digit_inside(44, 4), [9, 286, 5955146588160])