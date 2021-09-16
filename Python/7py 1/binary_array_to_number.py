"""
|--------------------------------------------------------------------------
| Ones and Zeros
|--------------------------------------------------------------------------
|
"""

def binary_array_to_number(arr):
   return int(''.join(list(map(lambda i: str(i), arr))), 2)


def binary_array_to_number(arr):
   return int("".join(map(str, arr)), 2)


def binary_array_to_number(arr):
   return int(''.join(str(a) for a in arr), 2)


def binary_array_to_number(arr):
   return sum(digit * 2**i for i, digit in enumerate(reversed(arr)))


print(binary_array_to_number([0,0,0,1]), 1)
print(binary_array_to_number([0,0,1,0]), 2)
print(binary_array_to_number([1,1,1,1]), 15)
print(binary_array_to_number([0,1,1,0]), 6)