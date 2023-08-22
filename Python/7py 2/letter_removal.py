"""
|--------------------------------------------------------------------------
| Simple letter removal
|--------------------------------------------------------------------------
|
"""

def solve(st, k):
   r = sorted(list(st))[:k]
   for val in r:
      st = st.replace(val, "", 1)
   return st


solve= lambda s, k: [s:=s.replace(l,'',1) for l in sorted(s)[:k]][-1] if k else s


def solve(st,k): 
   for x in range(26):
      while k and chr(x+97) in st:
         st = st.replace(chr(x+97), "", 1)
         k -= 1
   return st


print(solve('abracadabra', 1),'bracadabra')
print(solve('abracadabra', 2),'brcadabra')
print(solve('abracadabra', 6),'rcdbr')
print(solve('abracadabra', 8),'rdr')
print(solve('abracadabra', 50),'')