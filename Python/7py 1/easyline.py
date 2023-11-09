"""
|--------------------------------------------------------------------------
| Easy Line
|--------------------------------------------------------------------------
|
"""

def easyline(n):
   return easyline(n-1) * (4*n-2) // n if n else 1


from math import factorial
def easyline(n):
   return factorial(2 * n) // factorial(n)**2


def easyline(n):
   row = [1]
   for i in range(1, n+1):
      row.append(row[-1] * (n-i+1) // i)
   return sum(i ** 2 for i in row)


print(easyline(7), 3432)
print(easyline(13), 10400600)
print(easyline(17), 2333606220)
print(easyline(19), 35345263800)