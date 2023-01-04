"""
|--------------------------------------------------------------------------
| The fusc function -- Part 1
|--------------------------------------------------------------------------
|
"""

def fusc(n):
   return n if n < 2 else fusc(n/2) if n % 2 == 0 else fusc((n-1)/2) + fusc((n+1)/2)


def fusc(n):
   if n == 0 : return 0
   if n == 1 : return 1
   if n%2==0 : return int(fusc(n/2))
   if n%2!=0 : return int(fusc((n-1)/2))+int(fusc((n-1)/2+1))


def fusc(n):
   return n if n < 2 else fusc(n // 2) + (n % 2 and fusc(n // 2 + 1))


def fusc(n):
   if n < 2: return n
   m, rem = divmod(n, 2)
   return fusc(m) + (rem and fusc(m+1))


print(fusc(0), 0) 
print(fusc(1), 1)
print(fusc(85), 21)