"""
|--------------------------------------------------------------------------
| Credit Card Mask
|--------------------------------------------------------------------------
|
"""

def maskify(cc):
   res = ''
   x = list(reversed(cc))
   for i in range(len(x)):
      res += x[i] if i < 4 else '#'
   return ''.join(list(reversed(res)))


def maskify(cc):
   return "#"*(len(cc)-4) + cc[-4:]


def maskify(cc):
   return '{message:#>{fill}}'.format(message=cc[-4:], fill=len(cc))


def maskify(cc):
   return cc[-4:].rjust(len(cc), '#')


print(maskify("4556364607935616"), "############5616")
print(maskify("1"), "1")
print(maskify(""), "")