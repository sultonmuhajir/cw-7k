"""
|--------------------------------------------------------------------------
| Check for prime numbers
|--------------------------------------------------------------------------
|
"""

def is_prime(n):
   for i in range(2, n):
      if n % i == 0:
         return False
   return n > 1


def is_prime(n):
   return n > 1 and all(n % i for i in range(2, int(n**0.5) + 1))  


def is_prime(n,i=2):
   if (n <= 2):
      return True if(n == 2) else False
   elif (n % i == 0):
      return False
   elif (i * i > n):
      return True
   return is_prime(n, i + 1)


def is_prime(n):
   return pow(2, n - 1, n) == 1 if n > 2 else n == 2


def is_prime(num):
   return num > 1 and not any(num % n == 0 for n in range(2, num))


print(is_prime(0),False)
print(is_prime(1),False)
print(is_prime(2),True)
print(is_prime(3),True)
print(is_prime(11),True)
print(is_prime(12),False)
print(is_prime(571),True)
print(is_prime(25),False)