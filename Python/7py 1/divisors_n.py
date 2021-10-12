"""
|--------------------------------------------------------------------------
| Count the divisors of a number
|--------------------------------------------------------------------------
|
"""

def divisors(n):
   res = []
   for i in range(1, n+1):
      if n % i == 0:
         res.append(i)
   return len(res)


def divisors(n):
   return  len([l_div for l_div in range(1, n + 1) if n % l_div == 0]);


def divisors(n):
   return sum(n%i==0 for i in range(1,n+1))


def divisors(n):
   return sum(1 for i in range(1,n+1) if n % i == 0)


print(divisors(1), 1) 
print(divisors(4), 3)
print(divisors(5), 2)
print(divisors(12), 6)
print(divisors(30), 8)
print(divisors(4096), 13)