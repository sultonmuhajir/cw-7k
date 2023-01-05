"""
|--------------------------------------------------------------------------
| Largest 5 digit number in a series
|--------------------------------------------------------------------------
|
"""

def solution(digits):
   res = 0
   for i in range(len(digits)-4):
      res = max([res, int(digits[i:i+5])])
   return res


def solution(digits):
   return int(max(digits[a:a + 5] for a in range(len(digits) - 4)))


def solution(digits):
   return max(int(digits[i - 5: i]) for i, _ in enumerate(digits, 5))


print(solution("1234567898765"), 98765)
print(solution("731674765"), 74765)