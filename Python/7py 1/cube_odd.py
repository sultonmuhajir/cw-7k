"""
|--------------------------------------------------------------------------
| Sum of Odd Cubed Numbers
|--------------------------------------------------------------------------
|
"""

def cube_odd(arr):
   if len(list(filter(lambda i: type(i) != int, arr))) > 0:
      return None
   else:
      return sum(list(map(lambda i: i ** 3, filter(lambda i: i % 2 != 0, arr))))


def cube_odd(arr):
   return sum( n**3 for n in arr if n % 2 ) if all(type(n) == int for n in arr) else None


def cube_odd(arr):
   if len(set(map(type,arr))) < 2:
      return sum(n**3 for n in arr if n%2)


def cube_odd(arr):
   try:
      if not bool([*filter(lambda x: isinstance(x,bool),arr)]):
         return sum(filter(lambda x: x%2!=0,map(lambda x: x**3, arr)))
   except:
      return None


print(cube_odd([1, 2, 3, 4]), 28)
print(cube_odd([-3,-2,2,3]), 0)
print(cube_odd(["a",12,9,"z",42]), None)
print(cube_odd([]), 0)
print(cube_odd([2, 4]), 0)
print(cube_odd([True,12,9,42]), None)