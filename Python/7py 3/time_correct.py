"""
|--------------------------------------------------------------------------
| Correct the time-string
|--------------------------------------------------------------------------
|
"""

def time_correct(t):
   if t == '': return ''
   try:
      h, m, s = map(int, t.split(':'))
      x = 3600 * h + 60 * m + s
      return f'{x//3600%24:02}:{x//60%60:02}:{x%60:02}'
   except: return None
   

def time_correct(t):
   if not t: return t
   try:
      h, m, s = map(int, t.split(':'))
      if s >= 60: s -= 60; m += 1
      if m >= 60: m -= 60; h += 1
      return '%02d:%02d:%02d' % (h % 24, m, s)
   except: pass


def time_correct(t):
   if not t: return t
   try:
      h, m, s = [int(x) for x in t.split(':') if len(x) == 2]
      if s >= 60: s -= 60; m += 1
      if m >= 60: m -= 60; h += 1
      return f'{h%24:02}:{m:02}:{s:02}'
   except: pass


print(time_correct(None), None)
print(time_correct(""), "")
print(time_correct("001122"), None)
print(time_correct("00;11;22"), None)
print(time_correct("0a:1c:22"), None)
print(time_correct("09:10:01"), "09:10:01")
print(time_correct("11:70:10"), "12:10:10")