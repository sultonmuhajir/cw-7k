"""
|--------------------------------------------------------------------------
| Maximum Product
|--------------------------------------------------------------------------
|
"""

def adjacent_element_product(array):
   return max([array[i] * array[i+1] for i in range(len(array)-1)])


def adjacent_element_product(array):
   res = []
   for i in range(0, len(array) - 1):
      res.append(array[i] * array[i + 1])
   return max(res)


def adjacent_element_product(array):
   return max( a*b for a, b in zip(array, array[1:]) )


print(adjacent_element_product([5, 8]), 40)
print(adjacent_element_product([1, 2, 3]), 6)
print(adjacent_element_product([1, 5, 10, 9]), 90)