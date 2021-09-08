"""
|--------------------------------------------------------------------------
| Find the calculation type
|--------------------------------------------------------------------------
|
"""

def calc_type(a, b, res):
   if (a + b == res) :
      return 'addition'
   elif (a - b == res) :
      return 'subtraction'
   elif (a * b == res) :
      return 'multiplication'
   else :
      return 'division'


def calc_type(a, b, res):
   return {a + b: "addition", a - b: "subtraction", a * b: "multiplication", a / b: "division"}[res]


def calc_type(a, b, res):
   dict = {a+b:'addition',a-b:'subtraction',a*b:'multiplication',a/b:'division'}
   return dict[res]


def calc_type(a, b, res):
   return next(x for op, x in [('+', 'addition'), ('-', 'subtraction'), ('*', 'multiplication'), ('/', 'division')] 
   if eval(f'{a}{op}{b}') == res)


print(calc_type(1, 2, 3), "addition")
print(calc_type(10, 5, 5), "subtraction")
print(calc_type(10, 4, 40), "multiplication")
print(calc_type(9, 5, 1.8), "division")