"""
|--------------------------------------------------------------------------
| Odd or Even?
|--------------------------------------------------------------------------
|
"""

def odd_or_even(arr):
   return 'even' if sum(arr) % 2 == 0 else 'odd'


odd_or_even = lambda a: ['even','odd'][sum(a)%2]


def odd_or_even(arr):
   if sum(arr) % 2 == 0:
      return "even"
   else:
      return "odd"


def odd_or_even(arr):
   return ('even', 'odd')[sum(arr) % 2]


print(odd_or_even([0, 1, 2]), "odd")
print(odd_or_even([0, 1, 3]), "even")
print(odd_or_even([1023, 1, 2]), "even")