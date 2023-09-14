"""
|--------------------------------------------------------------------------
| Sum of numbers from 0 to N
|--------------------------------------------------------------------------
|
"""

def show_sequence(n):
   if n==0: return "0=0"
   if n<0: return f"{n}<0"
   return f"{'+'.join([str(i) for i in range(n+1)])} = {sum([i for i in range(n+1)])}"


def show_sequence(n):
   return f"{'+'.join(map(str,range(n+1)))} = {n*(n+1)//2}"if n>0 else "0=0" if n==0 else f"{n}<0"


def show_sequence(n):
   if n == 0:
      return "0=0"
   return "{} = {}" .format("+".join(map(str,range(n+1))),sum(range(n+1))) if n > 0 else "{}<0".format(n)


print(show_sequence(6), "0+1+2+3+4+5+6 = 21")