"""
|--------------------------------------------------------------------------
| Divide and Conquer
|--------------------------------------------------------------------------
|
"""

def div_con(x):
   num = 0
   string = 0
   for i in range(len(x)):
      if type(x[i]) == int:
         num += x[i] 
      else:
         string += int(x[i])
   return num - string


def div_con(lst):
   return sum(n if isinstance(n, int) else -int(n) for n in lst)


def div_con(x):
   sum = 0    
   for i in x:
      if (type(i) == int):
         sum += i
      else:
         sum -= int(i)    
   return sum


def div_con(x):
   return sum(-int(v) if isinstance(v, str) else v for v in x)


print(div_con([9, 3, '7', '3']), 2)
print(div_con(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14)
print(div_con(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13) 
print(div_con(['1', '5', '8', 8, 9, 9, 2, '3']), 11)
print(div_con([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61)
