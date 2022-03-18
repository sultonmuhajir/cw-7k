"""
|--------------------------------------------------------------------------
| Evens times last
|--------------------------------------------------------------------------
|
"""

def even_last(numbers): 
   res = 0
   for i in range(len(numbers)):
      if i % 2 == 0:
         res += numbers[i]
   return res * numbers[-1] if numbers else 0


def even_last(n): 
   return 0 if not n else sum(n[::2])*n[-1]


def even_last(numbers): 
   return bool(numbers) and sum(numbers[::2]) * numbers[-1]


def even_last(num): 
   return num and sum(num[::2]) * num[-1] or 0
  

print(even_last([2, 3, 4, 5]), 30)
print(even_last([]), 0)