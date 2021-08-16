"""
|--------------------------------------------------------------------------
| Mumbling
|--------------------------------------------------------------------------
|
"""

def accum(s):
   arr = []
   split = list(s.lower())
   for i in range(len(split)):
      res = ''
      for j in range(i+1):
         if j == 0:
            res += split[i].upper()
         else:
            res += split[i]
      arr.append(res)
   return '-'.join(arr)


def accum(s):
   return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))


def accum(s):
   output = ""
   for i in range(len(s)):
      output+=(s[i]*(i+1))+"-"
   return output.title()[:-1]


def accum(s):
   return '-'.join((a * i).title() for i, a in enumerate(s, 1))


def accum(s):
   return "-".join([((j*(i+1)).capitalize()) for i,j in enumerate(s)])


print(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
print(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb")