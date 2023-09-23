"""
|--------------------------------------------------------------------------
| Composing squared strings
|--------------------------------------------------------------------------
|
"""

def compose(s1, s2):
   x1, x2 = s1.split("\n"), s2.split("\n")
   res = [x1[i][:i + 1] + x2[-i - 1][:len(x2) - i] for i in range(len(x1))]
   return "\n".join(res)


def compose(s1, s2):
   return '\n'.join(e[0][:i+1]+e[1][:len(e[1])-i]for i,e in enumerate(zip(s1.split(),s2.split()[::-1])))


def compose(s1: str, s2: str) -> str:
   s1 = s1.split("\n")
   s2 = s2.split("\n")
   new_s = []
   for i, v in enumerate(s1):
      new_s.append(s1[i][:i+1] + s2[-i-1][:len(s2) - i]) 
   return '\n'.join(new_s)


print(
   compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"),
   "bNkTB\nhTrWO\nRTFVi\nCnnIj"
);