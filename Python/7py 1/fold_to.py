"""
|--------------------------------------------------------------------------
| Folding your way to the moon
|--------------------------------------------------------------------------
|
"""

def fold_to(distance):
   m, res = 0.0001, 0
   while (m < distance):
      m *= 2
      res += 1
   return res if distance >= 0 else None


def fold_to(distance):
   if distance >= 0:
      return int(distance * 10000).bit_length()


from math import log2
def fold_to(distance):
   if distance >= 0: return max(0, int(log2(distance * 10000) + 1))


def fold_to(distance):
   return None if distance<=0 else 0 if distance<=0.0001 else fold_to(distance*0.5)+1


def fold_to(distance):
   if distance >= 0: return next(i for i in range(100) if 1e-4*2**i >= distance)


print(fold_to(384000000),42)
print(fold_to(0.00005),0)
print(fold_to(0.0000001),0)
print(fold_to(0),0)
print(fold_to(-1),None)