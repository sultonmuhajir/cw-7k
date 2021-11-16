"""
|--------------------------------------------------------------------------
| Convert an array of strings to array of numbers
|--------------------------------------------------------------------------
|
"""

def to_float_array(arr): 
   return list(map(lambda i: float(i), arr))


def to_float_array(arr):
   return [float(n) for n in arr]


def to_float_array(arr):
   res = []
   for i in arr:
      res.append(float(i))
   return res


def to_float_array(arr):
   return [eval(str(v)) for v in arr]


print(to_float_array(["1.1", "2.2", "3.3"]), [1.1, 2.2, 3.3])