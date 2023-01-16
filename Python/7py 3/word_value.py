"""
|--------------------------------------------------------------------------
| Word values
|--------------------------------------------------------------------------
|
"""

def name_value(my_list):
   res = []
   for i in range(len(my_list)):
      x, count = my_list[i].replace(" ", ""), 0
      for j in range(len(x)):
         count += ord(x[j]) - 96
      res.append(count * (i + 1))
   return res


def name_value(s):
   return [sum(ord(c) - 96 for c in s[i] if c != ' ') * (i + 1) for i in range(0,len(s))]


def nameValue(myList):
   return [i*sum(map(lambda c: [0, ord(c)-96][c.isalpha()], w.lower())) for i,w in enumerate(myList,1)]


print(name_value(["codewars","abc","xyz"]),[88,12,225])
print(name_value(["abc abc","abc abc","abc","abc"]),[12,24,18,24])