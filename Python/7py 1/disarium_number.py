"""
|--------------------------------------------------------------------------
| Disarium Number (Special Numbers Series #3)
|--------------------------------------------------------------------------
|
"""

def disarium_number(number):
   string = str(number)
   res = 0
   for i in range(len(string)):
      res += int(string[i]) ** (i+1)
   return "Disarium !!" if res == number else "Not !!"


def disarium_number(number):
   return "Disarium !!" if sum(int(n)**i for i, n in enumerate(str(number), 1)) == number else "Not !!"


def disarium_number(number):
   a=0
   for j,i in enumerate(str(number)):
      a+=int(i)**(j+1)
   return 'Disarium !!' if a==number else 'Not !!'


def disarium_number(num):
   total = sum(int(n) ** i for i, n in enumerate(str(num), 1))
   return '{} !!'.format('Disarium' if total == num else 'Not')


print(disarium_number(89)  , "Disarium !!")
print(disarium_number(518) , "Disarium !!")
print(disarium_number(1024), "Not !!")