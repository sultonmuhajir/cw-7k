"""
|--------------------------------------------------------------------------
| Multiply characters
|--------------------------------------------------------------------------
|
"""

def spam(number):
   res = ''
   for i in range(number):
      res+='hue'
   return res


spam = 'hue'.__mul__


def spam(number):
   return 'hue' * number


def spam(number):
   return ''.join(['hue' for i in range(number)])


def spam(number):
   return ('{0}' * number).format('hue')


print(spam(1), "hue")
print(spam(6), "huehuehuehuehuehue")
print(spam(14), "huehuehuehuehuehuehuehuehuehuehuehuehuehue")