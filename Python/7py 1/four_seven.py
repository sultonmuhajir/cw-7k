"""
|--------------------------------------------------------------------------
| Four/Seven
|--------------------------------------------------------------------------
|
"""

def solution(n):
   return {7: 4, 4: 7}.get(n, 0)


solution = {4:7, 7:4}.get


def solution(n):
   while n==7: return 4
   while n==4: return 7
   return False


print(solution(4), 7)
print(solution(7), 4)