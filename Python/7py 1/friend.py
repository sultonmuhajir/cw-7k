"""
|--------------------------------------------------------------------------
| Friend or Foe?
|--------------------------------------------------------------------------
|
"""

def friend(x):
   return list(filter(lambda i: len(i) == 4, x))


def friend(x):
   result=[]
   for i in x:
      if len(i) == 4:
         result.append(i)
   return(result)


def friend(x):
   return [i for i in x if len(i) == 4]


print(friend(["Ryan", "Kieran", "Mark",]), ["Ryan", "Mark"])
print(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
print(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])