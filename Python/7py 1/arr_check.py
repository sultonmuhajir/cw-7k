"""
|--------------------------------------------------------------------------
| Is every value in the array an array?
|--------------------------------------------------------------------------
|
"""

def arr_check(arr):
   return len([i for i in arr if type(i)==list]) == len(arr)


def arr_check(arr):
   return all(type(i) == list for i in arr)


def arr_check(arr):
   return all(isinstance(el, list) for el in arr)


print(arr_check([]), True)
print(arr_check([['string']]), True)
print(arr_check([[], {}]), False)
print(arr_check([[1], [2], [3]]), True)
print(arr_check(["A", "R", "R", "A", "Y"]), False)