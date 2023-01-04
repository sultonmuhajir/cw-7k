"""
|--------------------------------------------------------------------------
| Rotate for a Max
|--------------------------------------------------------------------------
|
"""

def max_rot(n):
   s, res = str(n), [n]
   for i in range(len(s)):
      s = s[:i] + s[i+1:] + s[i]
      res.append(int(s))
   return max(res)


def max_rot(n):
   res = [str(n)]
   for i in range(len(res[0])):
      res.append(res[-1][:i] + res[-1][i+1:] + res[-1][i])
   return int(max(res))


def max_rot(n):
   res,i,c= [],0,str(n)
   while i<len(str(n)):
      res.append(int(c))
      c= c[:i]+c[i+1:]+c[i]
      i+=1
   return max(res)


print(max_rot(38458215), 85821534)
print(max_rot(195881031), 988103115)
print(max_rot(896219342), 962193428)
print(max_rot(69418307), 94183076)