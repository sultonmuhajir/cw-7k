"""
|--------------------------------------------------------------------------
| Simple beads count
|--------------------------------------------------------------------------
|
"""

def count_red_beads(n):
   return 0 if n < 2 else (n-1)*2


def count_red_beads(n):
   return max(0, 2 * (n-1))


def count_red_beads(n):
   return n and n*2-2


def count_red_beads(n):
   return (n * 2 - 2) * (n > 1)


print(count_red_beads(1), 0)
print(count_red_beads(3), 4)
print(count_red_beads(5), 8)