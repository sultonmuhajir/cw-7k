"""
|--------------------------------------------------------------------------
| Friday the 13th Part 1
|--------------------------------------------------------------------------
|
"""

def kill_count(counselors, jason):
   return [x[0] for x in counselors if x[1] < jason]


def kill_count(counselors, jason):
   lst = []
   for i in counselors:
      if i[1]<jason: lst.append(i[0])
   return lst


def kill_count(counselors, jason):
   return [name for name, iq in counselors if jason > iq]


print(kill_count([["Mike", 7],["Alysa", 3]], 7), ["Alysa"])