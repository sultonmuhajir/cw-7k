"""
|--------------------------------------------------------------------------
| Thinking & Testing: A and B?
|--------------------------------------------------------------------------
|
"""

def testit (a, b):
   return a | b


testit = int.__or__


from operator import or_ as testit


testit = lambda x, y: x | y


print(testit(0, 1), 1)
print(testit(1, 2), 3)
print(testit(10, 20), 30)
print(testit(1, 1), 1)
print(testit(1, 3), 3)