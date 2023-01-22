"""
|--------------------------------------------------------------------------
| Simple Fun #3: Late Ride
|--------------------------------------------------------------------------
|
"""

def late_ride(n):
   return sum(list(map(lambda i: int(i), list(str(n//60))+list(str(n%60)))))


def late_ride(n):
   return sum(map(int, str(n//60)+str(n%60)))


def late_ride(n):
   return sum([int(x) for x in (str(n % 60) + str(int(n / 60)))])


print(late_ride(240), 4)
print(late_ride(808), 14)
print(late_ride(1439), 19)
print(late_ride(0), 0)
print(late_ride(23), 5)
print(late_ride(8), 8)