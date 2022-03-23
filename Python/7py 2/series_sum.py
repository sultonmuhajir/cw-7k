"""
|--------------------------------------------------------------------------
| Sum of the first nth term of Series
|--------------------------------------------------------------------------
|
"""

def series_sum(n):   
   if n == 0:
      return "0.00"
   else:
      res = 1
      x = 4
      for i in range(1, n):
         ser = 1 / x
         res += ser
         x += 3
      return format(res, '.2f')


def series_sum(n):
   return '{:.2f}'.format(sum(1.0/(3 * i + 1) for i in range(n)))


def series_sum(n):
   sum = 0.0
   for i in range(0,n):
      sum += 1 / (1 + 3 * float(i))
   return '%.2f' % sum


def series_sum(n):
   return f'{sum(1/d for d in range(1,n*3,3)):.2f}'


print(series_sum(1), "1.00")
print(series_sum(2), "1.25")
print(series_sum(3), "1.39")