"""
|--------------------------------------------------------------------------
| How Green Is My Valley?
|--------------------------------------------------------------------------
|
"""

def make_valley(arr):
   arr.sort(reverse=True)
   return arr[::2] + list(reversed(arr[1::2]))


make_valley=lambda a:a.sort() or a[::-2]+a[len(a)%2::2]


def make_valley(arr):
   arr = sorted(arr)[::-1]
   return arr[0::2]+arr[1::2][::-1]


print(make_valley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]), [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17])
print(make_valley([20, 7, 6, 2]), [20, 6, 2, 7])
print(make_valley([14, 10, 8]), [14, 8, 10])
print(make_valley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]), [20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18])
print(make_valley([20, 16, 14, 10, 1]), [20, 14, 1, 10, 16])