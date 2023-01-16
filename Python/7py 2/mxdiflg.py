"""
|--------------------------------------------------------------------------
| Maximum Length Difference
|--------------------------------------------------------------------------
|
"""

def mxdiflg(a1, a2):
   if len(a1)==0 or len(a2)==0: return -1
   x, y = [len(s) for s in a1], [len(s) for s in a2]
   return max(max(x)-min(y), max(y)-min(x))


def mxdiflg(a1, a2):
   return max([abs(len(s1)-len(s2)) for s1 in a1 for s2 in a2], default = -1)


def mxdiflg(a1, a2):
   return max((abs(len(x)-len(y)) for x in a1 for y in a2)) if a1 and a2 else -1
   

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
print(mxdiflg(s1, s2), 13)