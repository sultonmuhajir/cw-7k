"""
|--------------------------------------------------------------------------
| Binary Addition
|--------------------------------------------------------------------------
|
"""

def add_binary(a,b):
   return bin(a+b)[2:]


def add_binary(a,b):
   return '{0:b}'.format(a + b)


def add_binary(a, b):
   return format(a + b, 'b')


def add_binary(a,b):
   return f"{a + b:b}"


print(add_binary(1,1),"10")
print(add_binary(0,1),"1")
print(add_binary(1,0),"1")
print(add_binary(2,2),"100")
print(add_binary(51,12),"111111")