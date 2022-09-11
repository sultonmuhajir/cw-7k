"""
|--------------------------------------------------------------------------
| Currying functions: multiply all elements in an array
|--------------------------------------------------------------------------
|
"""

def multiply_all(arr):
   return lambda x: list(map(lambda i: i * x, arr))


multiply_all = lambda arr: lambda x: [num*x for num in arr]


def multiply_all(integers: list):
   return lambda n: [n * i for i in integers]


print(multiply_all([1, 2, 3])(1), [1, 2, 3])
print(multiply_all([1, 2, 3])(2), [2, 4, 6])
print(multiply_all([1, 2, 3])(0), [0, 0, 0])
print(multiply_all([])(10), [])