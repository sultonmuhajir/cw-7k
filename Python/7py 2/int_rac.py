"""
|--------------------------------------------------------------------------
| Hero's root
|--------------------------------------------------------------------------
|
"""

def int_rac(n, guess, count=1):
   x = int((guess + n / guess) / 2)
   return count if abs(guess - x) < 1 else int_rac(n, x, count + 1)


int_rac=lambda n, x, c=1: int_rac(n, (x+n/x)/2 ,c+1) if abs(int(n**0.5)-x)>=1 else c


def int_rac(n, guess):
   count, x = 1, (guess + n / guess) // 2
   while abs(guess - x) >= 1:
      guess, x, count = x, (x + n / x) // 2, count + 1
   return count


from itertools import count
def int_rac(n, guess):
   for i in count(1):
      last_guess, guess = guess, (guess + n // guess) // 2
      if abs(last_guess - guess) < 1: return i


print(int_rac(25, 1), 4)
print(int_rac(125348, 300), 3)