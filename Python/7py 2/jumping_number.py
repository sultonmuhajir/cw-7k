"""
|--------------------------------------------------------------------------
| Jumping Number (Special Numbers Series #4)
|--------------------------------------------------------------------------
|
"""

def jumping_number(number):
   arr = list(map(lambda i: int(i), list(str(number))))
   for i in range(len(arr)-1):
      if abs(arr[i] - arr[i+1])!=1:
         return "Not!!"
   return "Jumping!!"


def jumping_number(number):
   arr = list(map(int, str(number)))
   return ('Not!!', 'Jumping!!')[all(map(lambda a, b: abs(a - b) == 1, arr, arr[1:]))]


def jumping_number(number):
   s = str(number)
   return next(('Not!!' for a,b in zip(s, s[1:]) if abs(int(b)-int(a)) != 1), 'Jumping!!')


print(jumping_number(98), "Jumping!!")
print(jumping_number(79), "Not!!")
print(jumping_number(4343456) , "Jumping!!")