"""
|--------------------------------------------------------------------------
| Highest and Lowest
|--------------------------------------------------------------------------
|
"""

def high_and_low(numbers):
   arr = list(map(lambda i: int(i), numbers.split(' ')))
   return f'{max(arr)} {min(arr)}'


def high_and_low(numbers):
   return " ".join(x(numbers.split(), key=int) for x in (max, min))


def high_and_low(numbers):
   nums = sorted(numbers.split(), key=int)
   return '{} {}'.format(nums[-1], nums[0])


def high_and_low(numbers):
   numbers = [int(x) for x in numbers.split(" ")]
   return str(max(numbers)) + " " + str(min(numbers))


print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
print(high_and_low("1 -1"), "1 -1")
print(high_and_low("1 1"), "1 1")
print(high_and_low("-1 -1"), "-1 -1")