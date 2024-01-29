"""
|--------------------------------------------------------------------------
| Multiplication - Generators #2
|--------------------------------------------------------------------------
|
"""

def generator(a):
   x = 1
   while True:
      yield f"{a} x {x} = {a * x}"
      x += 1


generator = lambda a: (f"{a} x {i} = {a * i}" for i in __import__("itertools").count(1))


def generator(a):
   return (f'{a} x {i} = {a * i}' for i in range(1,11))