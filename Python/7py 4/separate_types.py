"""
|--------------------------------------------------------------------------
| Separate basic types
|--------------------------------------------------------------------------
|
"""

def separate_types(seq): 
   res = {}
   xint = list(filter(lambda i: type(i) == int, seq))
   xstr = list(filter(lambda i: type(i) == str, seq))
   xbool = list(filter(lambda i: type(i) == bool, seq))
   if len(xint) > 0: res[int] = xint
   if len(xstr) > 0: res[str] = xstr
   if len(xbool) > 0: res[bool] = xbool
   return res


separate_types = lambda S: {t:[e for e in S if type(e)==t] for t in {type(e) for e in S}}


def separate_types(seq):
   res = {}    
   for i in seq:
      res.setdefault(type(i), []).append(i)
   return res


def separate_types(seq): 
   res = {}
   for element in seq:
      if type(element) not in res:
         res[type(element)] = [element]
      else:
         res[type(element)].append(element)     
   return res


print(separate_types(['a', 1, 2, False, 'b']))
print(separate_types(['a', 1, 2]))