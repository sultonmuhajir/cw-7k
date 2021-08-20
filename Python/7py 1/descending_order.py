"""
|--------------------------------------------------------------------------
| Descending Order
|--------------------------------------------------------------------------
|
"""

def descending_order(num):
   return int(''.join(reversed(sorted(list(str(num))))))


def Descending_Order(num):
   s = str(num)
   s = list(s)
   s = sorted(s)
   s = reversed(s)
   s = ''.join(s)
   return int(s)


def Descending_Order(num):
   return int(''.join(sorted(str(num))[::-1]))


print(descending_order(0), 0)
print(descending_order(15), 51)
print(descending_order(123467589), 987654321)