"""
|--------------------------------------------------------------------------
| Jenny the youngest detective
|--------------------------------------------------------------------------
|
"""

def missing(nums, s):
   try: return ''.join([''.join(s.split(' '))[i].lower() for i in sorted(nums)])
   except: return "No mission today"


def missing(nums, s):
   s = s.replace(' ', '').lower()
   if max(nums) >= len(s):
      return "No mission today"
   return ''.join( s[c] for c in sorted(nums))


def missing(nums, s):
   s = s.replace(' ','').lower()
   try: return ''.join(s[i] for i in sorted(nums))
   except: return "No mission today"


print(missing([0, 3, 5], "I love you"), "ivy")
print(missing([29, 31, 8], "The quick brown fox jumps over the lazy dog"), "bay")
print(missing([12, 4, 6], "Good Morning"), "No mission today")