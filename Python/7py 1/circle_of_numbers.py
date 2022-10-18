"""
|--------------------------------------------------------------------------
| Simple Fun #2: Circle of Numbers
|--------------------------------------------------------------------------
|
"""

def circle_of_numbers(n, fst):
   return (fst + n / 2) % n


def circle_of_numbers(n, fst):
   return (fst + .5 * n ) % n


def circle_of_numbers(n, fst):
   return (n // 2 + fst) % n


print(circle_of_numbers(10,2) , 7)
print(circle_of_numbers(10,7) , 2)
print(circle_of_numbers(4,1) , 3)
print(circle_of_numbers(6,3) , 0)