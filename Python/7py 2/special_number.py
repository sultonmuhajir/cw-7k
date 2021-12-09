"""
|--------------------------------------------------------------------------
| Special Number (Special Numbers Series #5)
|--------------------------------------------------------------------------
|
"""

def special_number(number):
   x = '012345'
   num = str(number)
   count = 0
   for i in range(len(num)):
      for j in range(len(x)):
         if num[i] == x[j]:
            count+=1
   return "Special!!" if count==len(num) else "NOT!!"


def special_number(n):
   return "Special!!" if max(str(n)) <= "5" else "NOT!!"


def special_number(n):
   return 'Special!!' if all(int(e) < 6 for e in str(n)) else 'NOT!!'


def special_number(number):
   return ('Special' if set(str(number)) <= set('012345') else 'NOT') + '!!'


print(special_number(5), "Special!!")
print(special_number(9), "NOT!!")
print(special_number(23), "Special!!")
print(special_number(79), "NOT!!")