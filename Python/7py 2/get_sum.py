"""
|--------------------------------------------------------------------------
| Beginner Series #3 Sum of Numbers
|--------------------------------------------------------------------------
|
"""

def get_sum(a,b):
   minn = min(a,b)
   maxx = max(a,b)
   return (maxx - minn + 1) * (minn + maxx) / 2


def get_sum(a,b):
   return sum(range(min(a, b), max(a, b) + 1))


def get_sum(a, b):
   return (a + b) * (abs(a - b) + 1) // 2


def get_sum(a,b):
   a,b = sorted((a,b))
   return b*(b+1)//2 - a*(a-1)//2


print(get_sum(0,1),1)
print(get_sum(0,-1),-1)