"""
|--------------------------------------------------------------------------
| Square Every Digit
|--------------------------------------------------------------------------
|
"""

def square_digits(num):
   arr = list(str(num))
   res = ''
   for i in range(len(arr)):
      temp = int(arr[i]) ** 2
      res += str(temp)
   return int(res)


def square_digits(num):
   return int(''.join(str(int(d)**2) for d in str(num)))


def square_digits(num):
   return int(''.join(map(lambda x: str(int(x)**2), str(num))))


print(square_digits(9119), 811181)
print(square_digits(0), 0)