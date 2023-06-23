"""
|--------------------------------------------------------------------------
| Strong Number (Special Numbers Series #2)
|--------------------------------------------------------------------------
|
"""

def strong_num(number):
   res = 0
   for i in range(len(str(number))):
      fact = 1
      for j in range(2, int(str(number)[i])+1): fact *= j
      res += fact
   return "STRONG!!!!" if res == number else"Not Strong !!"


from math import factorial
def strong_num(number):
   return "STRONG!!!!" if sum(factorial(int(i)) for i in str(number)) == number else "Not Strong !!"


def strong_num(number):
   return ['Not Strong !!', 'STRONG!!!!'][number == sum([factorial(int(i)) for i in str(number)])]


print(strong_num(145), "STRONG!!!!")
print(strong_num(185), "Not Strong !!")