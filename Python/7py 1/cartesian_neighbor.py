"""
|--------------------------------------------------------------------------
| Cartesian neighbors
|--------------------------------------------------------------------------
|
"""

def cartesian_neighbor(x,y):
   return [
      (x-1, y+1), (x, y+1), (x+1, y+1),
      (x-1, y), (x+1, y),
      (x-1, y-1), (x, y-1), (x+1, y-1),
   ]


def cartesian_neighbor(x,y):
   return [(x+i, y+j) for i in range(-1,2) for j in range(-1,2) if i or j]


def cartesian_neighbor(x,y):
   arr = []
   for i in range(x-1, x+2):
      for j in range(y-1, y+2):
         if (i,j) != (x,y): arr.append((i,j))
   return(arr)


print(cartesian_neighbor(2, 2), [
   [1, 1], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2], [3, 3],
])