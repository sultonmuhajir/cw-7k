"""
|--------------------------------------------------------------------------
| String reverse slicing 101
|--------------------------------------------------------------------------
|
"""

def reverse_slice(my_str):
   res = []
   for i in range(len(my_str)):
      res.append(''.join(reversed(my_str[:i+1])))
   return res[::-1]


def reverse_slice(s):
   return [s[::-1][i:] for i in range(len(s))]


def reverse_slice(s):
   a, i = [], len(s)
   while i>0:
      s=s[:i]
      a+=[s[::-1]]
      i-=1
   return a


print(reverse_slice('123'), ['321', '21', '1'])
print(reverse_slice('abcde'), ['edcba', 'dcba', 'cba', 'ba', 'a'])