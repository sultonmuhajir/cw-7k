"""
|--------------------------------------------------------------------------
| Simple string reversal
|--------------------------------------------------------------------------
|
"""

def solve(s):
   x = reversed(s.replace(" ", ""))
   return "".join(i if i == " " else next(x) for i in s)


def solve(s):
   rev = list(s.replace(" ", "")[::-1])
   for index, item in enumerate(s):
      if item == " ":
         rev.insert(index, item)
   return "".join(rev)


def solve(s):
   r = list(s.replace(" ", ""))
   return "".join(i if i == " " else r.pop() for i in s)


print(solve("codewars"),"srawedoc")
print(solve("your code"),"edoc ruoy")
print(solve("your code rocks"),"skco redo cruoy")
print(solve("i love codewars"),"s rawe docevoli")