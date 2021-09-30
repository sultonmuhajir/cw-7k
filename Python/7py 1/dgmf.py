"""
|--------------------------------------------------------------------------
| Don't give me five!
|--------------------------------------------------------------------------
|
"""

def dont_give_me_five(start,end):
   res = 0
   for i in range(start, end+1):
      arr = list(str(i))
      if '5' not in arr:
         res += 1
   return res


def dont_give_me_five(start, end):
   return sum('5' not in str(i) for i in range(start, end + 1))


def dont_give_me_five(start,end):
   return len([num for num in range(start, end+1) if '5' not in str(num)])


def dont_give_me_five(start,end):
   return len(filter(lambda x: "5" not in str(x), range(start, end + 1)))


print(dont_give_me_five(1,9), 8)
print(dont_give_me_five(4,17), 12)
print(dont_give_me_five(40, 60), 10)