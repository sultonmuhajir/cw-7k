"""
|--------------------------------------------------------------------------
| Row Weights
|--------------------------------------------------------------------------
|
"""

def row_weights(array):
   res = [0, 0]
   for i, v in enumerate(array):
      if i % 2 == 0: res[0] += v
      else: res[1] += v
   return tuple(res)


def row_weights(array):
   return sum(array[::2]), sum(array[1::2])


def row_weights(array):
   res = [0, 0]
   i = 0
   while i < len(array):        
      res[i % 2] += array[i]
      i += 1
   return tuple(res)


print(row_weights([80]), (80,0))
print(row_weights([100,50]), (100,50))
print(row_weights([50,60,70,80]), (120,140))
print(row_weights([13,27,49]), (62,27))