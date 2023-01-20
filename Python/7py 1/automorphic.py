"""
|--------------------------------------------------------------------------
| Automorphic Number (Special Numbers Series #6)
|--------------------------------------------------------------------------
|
"""

def automorphic(n):
   return "Automorphic" if str(n) == str(n**2)[-len(str(n)):] else "Not!!"


def automorphic(n):
   return ('Not!!', 'Automorphic')[str(n ** 2).endswith(str(n))]


def automorphic(n):
   return 'Automorphic' if (n ** 2) % 10 ** len(str(n)) == n else 'Not!!'


def automorphic(n):
   return "Automorphic" if str(n**2).endswith(str(n)) else "Not!!"


print(automorphic(6), "Automorphic")
print(automorphic(9), "Not!!")
print(automorphic(76), "Automorphic")
print(automorphic(95), "Not!!")
print(automorphic(625), "Automorphic")
print(automorphic(225), "Not!!")