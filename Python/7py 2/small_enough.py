"""
|--------------------------------------------------------------------------
| Small enough? - Beginner
|--------------------------------------------------------------------------
|
"""

def small_enough(array, limit):
   return max(array) <= limit


def small_enough(array, limit):
   return all(a <= limit for a in array)


from typing import List
def small_enough(array: List[int], limit: int) -> bool:
   return len(list(filter(lambda _it: _it <= limit, array))) == len(array)


def small_enough(array: list, limit: int) -> bool:
   return all(map(limit.__ge__, array))


print(small_enough([66, 101], 200), True)
print(small_enough([78, 117, 110, 99, 104, 117, 107, 115], 100), False)
print(small_enough([101, 45, 75, 105, 99, 107], 107), True)
print(small_enough([80, 117, 115, 104, 45, 85, 112, 115], 120), True)