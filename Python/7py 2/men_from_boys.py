"""
|--------------------------------------------------------------------------
| Sort Out The Men From Boys
|--------------------------------------------------------------------------
|
"""

def men_from_boys(arr):
   return sorted(list({x for x in arr if x%2==0})) + sorted(list({x for x in arr if x%2==1}), reverse=True)


def men_from_boys(arr):
   return sorted(set(arr), key=lambda a: (a % 2, [a, -a][a % 2]))


def men_from_boys(arr):   
   return sorted(i for i in set(arr) if i%2==0)+\
         sorted(j for j in set(arr) if j%2==1)[::-1]


print(men_from_boys([7,3,14,17]), [14,17,7,3])
print(men_from_boys([2,43,95,90,37]), [2,90,95,43,37])
print(men_from_boys([20,33,50,34,43,46]), [20,34,46,50,43,33])