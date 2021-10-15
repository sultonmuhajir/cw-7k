"""
|--------------------------------------------------------------------------
| Count the Digit
|--------------------------------------------------------------------------
|
"""

def nb_dig(n, d):
   res = 0
   for i in range(n+1):
      res += len(list(filter(lambda i: i == str(d) , str(i**2))))
   return res


def nb_dig(n, d):
   return sum(str(i*i).count(str(d)) for i in range(n+1))


def nb_dig(n, d):
   return ''.join(str(n * n) for n in range(n + 1)).count(str(d))


def nb_dig(n, d):
   return sum([str(x**2).count(str(d)) for x in range(n+1)])


print(nb_dig(5750, 0), 4700)
print(nb_dig(11011, 2), 9481)
print(nb_dig(12224, 8), 7733)
print(nb_dig(11549, 1), 11905)
print(nb_dig(25, 1), 11)