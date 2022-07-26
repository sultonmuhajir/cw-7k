"""
|--------------------------------------------------------------------------
| Penultimate
|--------------------------------------------------------------------------
|
"""

def penultimate(a):
   return a[-2]


def penultimate(a):
   return a[len(a)-2]


def penultimate(a):
   return next(iter(a[-2:-1]), None)


print(penultimate([1,2,3,4]),3)
print(penultimate("hello"),'l')