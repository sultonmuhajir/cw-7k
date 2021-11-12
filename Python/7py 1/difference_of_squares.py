"""
|--------------------------------------------------------------------------
| Difference Of Squares
|--------------------------------------------------------------------------
|
"""

def difference_of_squares(n):
   return n * (n * n - 1) * (3 * n + 2) / 12


difference_of_squares=lambda n:(n*n-1)*(n*n/4+n/6)


def difference_of_squares(x):
   res = range(1,x+1,1)
   return (sum(res) ** 2) - (sum( z**2 for z in res))


def difference_of_squares(n):
   return sum(range(n+1))**2 - sum(i**2 for i in range(n+1))


print(difference_of_squares(5), 170)
print(difference_of_squares(10), 2640)
print(difference_of_squares(100), 25164150)