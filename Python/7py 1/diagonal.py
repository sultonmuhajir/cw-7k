"""
|--------------------------------------------------------------------------
| Principal Diagonal | VS | Secondary Diagonal
|--------------------------------------------------------------------------
|
"""

def diagonal(matrix):
   res, x = 0, len(matrix) - 1
   for i in range(len(matrix)):
      res += matrix[i][i] - matrix[i][x]
      x -= 1
   return "Principal Diagonal win!" if res > 0 else "Secondary Diagonal win!" if res < 0 else "Draw!"


def diagonal(matrix):
   res = sum(row[i] - row[-i-1] for i,row in enumerate(matrix))
   return f"{'Principal' if res > 0 else 'Secondary'} Diagonal win!" if res else "Draw!"


def diagonal(m):
   p = sum(r[i] for i, r in enumerate(m)) 
   s = sum(r[-i] for i, r in enumerate(m, 1))
   if p > s: return 'Principal Diagonal win!'
   if s > p: return 'Secondary Diagonal win!'
   return 'Draw!'


print(
   diagonal([
      [2, 2, 2],
      [4, 2, 6],
      [1, 8, 2],
   ]),
   "Principal Diagonal win!"
)
print(
   diagonal([
      [1, 2, 2, 5, 1],
      [4, 1, 6, 1, 1],
      [1, 8, 5, 6, 2],
      [1, 5, 2, 1, 2],
      [1, 8, 2, 6, 1],
   ]),
   "Secondary Diagonal win!"
)