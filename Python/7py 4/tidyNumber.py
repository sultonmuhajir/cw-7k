"""
|--------------------------------------------------------------------------
| Tidy Number (Special Numbers Series #9)
|--------------------------------------------------------------------------
|
"""

def tidyNumber(n):
   return list(str(n)) == sorted(list(str(n)))


def tidyNumber(n):
   return n == int(''.join(sorted(str(n))))


def tidyNumber(n):
   n = str(n)
   for i in range(0, len(n) - 1):
      if n[i] > n[i + 1]:
         return False
   return True


def tidyNumber(n):
   a = str(n)
   index = 0
   while index<len(a)-1:
      if int(a[index])>int(a[index+1]):
         return False
      index +=1
   return True


print(tidyNumber(12), True)
print(tidyNumber(102), False)
print(tidyNumber(9672), False)
print(tidyNumber(2789), True)