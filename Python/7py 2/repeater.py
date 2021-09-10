"""
|--------------------------------------------------------------------------
| Thinkful - String Drills: Repeater
|--------------------------------------------------------------------------
|
"""

def repeater(string, n):
   return string * n


repeater = str.__mul__


def repeater(string, n):
   for i in str(n):
      return string*n


def repeater(string, n):
   res = ''.join(string * n)
   return res


print(repeater('a', 5), 'aaaaa')
print(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa')
print(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ')