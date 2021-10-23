"""
|--------------------------------------------------------------------------
| JavaScript Array Filter
|--------------------------------------------------------------------------
|
"""

def get_even_numbers(arr):
   return list(filter(lambda i: i % 2 == 0, arr))


def get_even_numbers(arr):
   return [x for x in arr if x % 2 == 0]


def get_even_numbers(arr):
   return [v for v in arr if not v&1]


print(get_even_numbers([2,4,5,6]), [2,4,6], "Returned list is incorrect")
print(get_even_numbers([]), [], "Returned list is incorrect")
print(get_even_numbers([1]), [], "Returned list is incorrect")
print(get_even_numbers([1,2]), [2], "Returned list is incorrect")
print(get_even_numbers([1,2,3,4,5]), [2,4], "Returned list is incorrect")
print(get_even_numbers([2,4,6,8]), [2,4,6,8], "Returned list is incorrect")