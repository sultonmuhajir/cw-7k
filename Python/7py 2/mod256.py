"""
|--------------------------------------------------------------------------
| MOD 256 without the MOD operator
|--------------------------------------------------------------------------
|
"""

def mod256_without_mod(number):
   return  number - ((number // 256) * 256)


def mod256_without_mod(number):
   return number & 255


def mod256_without_mod(number):
   return pow(number, 1, 256)


print(mod256_without_mod(254), 254)
print(mod256_without_mod(256), 0)
print(mod256_without_mod(258), 2)
print(mod256_without_mod(-254), 2)
print(mod256_without_mod(-256), 0)
print(mod256_without_mod(-258), 254)