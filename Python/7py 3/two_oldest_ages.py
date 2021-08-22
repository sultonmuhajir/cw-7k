"""
|--------------------------------------------------------------------------
| Two Oldest Ages
|--------------------------------------------------------------------------
|
"""

def two_oldest_ages(ages):
   sort = list(reversed(sorted(ages)))
   return [sort[1], sort[0]]


def two_oldest_ages(ages):
   return sorted(ages)[-2:]


def two_oldest_ages(ages):
   max_number = max(ages)
   ages.remove(max_number)
   return [max(ages), max_number]


import heapq
def two_oldest_ages(ages):
   return sorted(heapq.nlargest(2,ages))


print(two_oldest_ages([1, 5, 87, 45, 8, 8]), [45, 87])
print(two_oldest_ages([6, 5, 83, 5, 3, 18]), [18, 83])
print(two_oldest_ages([10, 1]), [1, 10])