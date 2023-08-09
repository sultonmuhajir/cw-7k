"""
|--------------------------------------------------------------------------
| The wheat/rice and chessboard problem
|--------------------------------------------------------------------------
|
"""

def squares_needed(grains):
   return len(bin(grains)[2:]) if grains else 0


def squares_needed(grains):
   return grains.bit_length()


def squares_needed(grains):
   return 0 if grains<1 else 1+squares_needed(grains//2)


print(squares_needed(0), 0)
print(squares_needed(1), 1)
print(squares_needed(2), 2)
print(squares_needed(3), 2)
print(squares_needed(4), 3)