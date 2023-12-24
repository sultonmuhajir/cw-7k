"""
|--------------------------------------------------------------------------
| Build a square
|--------------------------------------------------------------------------
|
"""

def generate_shape(n):
   res = []
   for i in range(n):
      res.append('+' * n)
   return '\n'.join(res)


def generateShape(integer):
   return '\n'.join('+' * integer for i in range(integer))


def generateShape(i):
   return (i-1)*(('+'*i)+'\n')+('+'*i)


def generateShape(integer):
   return (f"{'+' * integer}\n" * integer)[:-1]


print(generate_shape(3))
print(generate_shape(8))