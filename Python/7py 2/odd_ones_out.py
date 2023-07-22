"""
|--------------------------------------------------------------------------
| Odd Ones Out!
|--------------------------------------------------------------------------
|
"""

def odd_ones_out(numbers):
   return [x for x in numbers if numbers.count(x) % 2 == 0]


def odd_ones_out(numbers):
   out = []
   for i in numbers:
      if numbers.count(i) % 2 == 0: out.append(i)
   return out


def odd_ones_out(numbers):
   return list(filter(lambda x: not numbers.count(x) % 2, numbers))


print(odd_ones_out([1,2,3,1,3,3]), [1,1])
print(odd_ones_out([75, 68, 75, 47, 68]), [75, 68, 75, 68])
print(odd_ones_out([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67])