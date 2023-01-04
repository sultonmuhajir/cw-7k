"""
|--------------------------------------------------------------------------
| Flatten and sort an array
|--------------------------------------------------------------------------
|
"""

def flatten_and_sort(array):
   arr = []
   for i in range(len(array)):
      for j in range(len(array[i])):
         arr.append(array[i][j])
   return sorted(arr)


flatten_and_sort = lambda a, b=[]: b.clear() or list(map(b.extend, a)) and sorted(b)


def flatten_and_sort(array):
   return sorted([j for i in array for j in i])


from itertools import chain
def flatten_and_sort(array):
   return sorted((chain(*array)))


def flatten_and_sort(array):
   return sorted(sum(array, []))


print(flatten_and_sort([]), [])
print(flatten_and_sort([[], []]), [])
print(flatten_and_sort([[], [1]]), [1])
print(flatten_and_sort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9])
print(flatten_and_sort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100])