"""
|--------------------------------------------------------------------------
| String prefix and suffix
|--------------------------------------------------------------------------
|
"""

def solve(s):
   x = 0
   for i in range(len(s) // 2 + 1):
      if s[:i] == s[-i:]: x = i
   return x


solve=lambda s:len(__import__('re').match(r'^(.*).*\1$',s).group(1))


def solve(st):
   i = len(st)//2
   while i and not st.endswith(st[0:i]): i -= 1
   return i


print(solve("abcd"),0)
print(solve("abcda"),1)
print(solve("abcdabc"),3)
print(solve("abcabc"),3)
print(solve("abcabca"),1)
print(solve("aaaaa"),2)
print(solve("aaaa"),2)
print(solve("aaa"),1)
print(solve("aa"),1)
print(solve("a"),0)