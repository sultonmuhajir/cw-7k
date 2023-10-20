"""
|--------------------------------------------------------------------------
| Greet Me
|--------------------------------------------------------------------------
|
"""

def greet(name): 
   return f'Hello {name.capitalize()}!'


def greet(name): 
   return "Hello " + name.title() + "!" 


def greet(name): 
   return 'Hello {}!'.format(name.title())


print(greet('riley'), 'Hello Riley!')
print(greet('molly'), 'Hello Molly!')
print(greet('BILLY'), 'Hello Billy!')