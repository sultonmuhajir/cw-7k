"""
|--------------------------------------------------------------------------
| String ends with?
|--------------------------------------------------------------------------
|
"""

def solution(string, ending):
   return True if ending == '' else string[len(string) - len(ending):] == ending


def solution(string, ending):
   return string.endswith(ending)


def solution(string, ending):
   return ending in string[-len(ending):]


print(solution('abcde', 'cde'), True)
print(solution('abcde', 'abc'), False)
print(solution('abcde', ''), True)