"""
|--------------------------------------------------------------------------
| If you can't beat 'em, join 'em!
|--------------------------------------------------------------------------
|
"""

def cant_beat_so_join(numbers):
   return sum(sorted(numbers, key = lambda x: sum(x), reverse = True),[])


def cant_beat_so_join(numbers):
   return sum(sorted(numbers, key=lambda x: -sum(x)), [])


def cant_beat_so_join(numbers):
   return [n for ns in sorted(numbers, key=sum, reverse=True) for n in ns]


print(cant_beat_so_join([[1,2], [3,4], [5,6], [7,8], [9]]), [7, 8, 5, 6, 9, 3, 4, 1, 2])
print(cant_beat_so_join([[5, 1],[9, 14],[17, 23],[4, 1],[0, 1]]), [17, 23, 9, 14, 5, 1, 4, 1, 0, 1])
print(cant_beat_so_join([[13, 37], [43, 17], [2,3], [45,64], [1,9]]), [45, 64, 43, 17, 13, 37, 1, 9, 2, 3])