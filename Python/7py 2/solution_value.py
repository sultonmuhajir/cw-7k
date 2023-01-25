"""
|--------------------------------------------------------------------------
| Substituting Variables Into Strings: Padded Numbers
|--------------------------------------------------------------------------
|
"""

def solution(value):
   return f"Value is {('00000'+str(value))[-5:]}"


def solution(value):
   return "Value is %05d" % value


def solution(value):
   return f'Value is {value:05d}'


print(solution(0), 'Value is 00000')
print(solution(5), 'Value is 00005')
print(solution(109), 'Value is 00109')
print(solution(1204), 'Value is 01204')