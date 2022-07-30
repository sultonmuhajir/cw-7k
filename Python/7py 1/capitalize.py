"""
|--------------------------------------------------------------------------
| Alternate capitalization
|--------------------------------------------------------------------------
|
"""

def capitalize(s):
   x, y = '', ''
   for i, v in enumerate(s):
      x += v.lower() if i % 2 != 0 else v.upper()
      y += v.lower() if i % 2 == 0 else v.upper()
   return [x, y]


def capitalize(s):
   s = ''.join(c if i%2 else c.upper() for i,c in enumerate(s))
   return [s, s.swapcase()]


def capitalize(s):
   return [''.join(c if (k + i) % 2 else c.upper() for i, c in enumerate(s)) for k in [0, 1]]


print(capitalize("abcdef"),['AbCdEf', 'aBcDeF'])
print(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS'])
print(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa'])
print(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS'])