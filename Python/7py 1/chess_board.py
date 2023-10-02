"""
|--------------------------------------------------------------------------
| draw me a chessboard
|--------------------------------------------------------------------------
|
"""

def chess_board(rows, columns):
   res = []
   for i in range(rows):
      temp = []
      for j in range(columns):
         temp.append("O") if (i + j) % 2 == 0 else temp.append("X")
      res.append(temp)
   return res


def chess_board(rows, cols):
   return [list(('OX'*cols)[row%2:row%2+cols]) for row in range(rows)]


def chess_board(rows, columns):
   return [["OX"[(i+j)%2] for j in range(columns)] for i in range(rows)]


print(chess_board(6, 4))