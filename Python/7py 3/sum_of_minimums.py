"""
|--------------------------------------------------------------------------
| Are the numbers in order?
|--------------------------------------------------------------------------
|
"""

def sum_of_minimums(numbers):
   res = []
   for i in range(len(numbers)):
      res.append(min(numbers[i]))
   return sum(res)

def sum_of_minimums(numbers):
   return sum([min(x) for x in numbers])


def sum_of_minimums(numbers):
   return sum(map(min, numbers))


def sum_of_minimums(numbers):
   return sum([sorted(x)[0] for x in numbers])
   


print(sum_of_minimums([ [7,9,8,6,2 ], [6,3,5,4,3], [5,8,7,4,5] ]),9)
print(sum_of_minimums([ [11,12,14,54], [67,89,90,56], [7,9,4,3], [9,8,6,7]]),76)