"""
|--------------------------------------------------------------------------
| Check three and two
|--------------------------------------------------------------------------
|
"""

def check_three_and_two(array):
   if len(set(array)) == 2:
      x = len(list(filter(lambda i: i == list(set(array))[0], array)))
      return x == 2 or x == 3
   else:
      return False


def check_three_and_two(array):
   return { array.count(x) for x in set(array) } == {2, 3}


def check_three_and_two(array):
   return sum([array.count(x) for x in array]) == 13


def check_three_and_two(array):
   return len(set(array)) == 2 and array.count(array[0]) not in [1,4]


print(check_three_and_two(["a", "a", "a", "b", "b"]), True)
print(check_three_and_two(["a", "c", "a", "c", "b"]), False)
print(check_three_and_two(["a", "a", "a", "a", "a"]), False)