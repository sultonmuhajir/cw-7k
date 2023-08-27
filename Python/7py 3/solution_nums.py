"""
|--------------------------------------------------------------------------
| Sort Numbers
|--------------------------------------------------------------------------
|
"""

def solution(nums):
   return [] if nums == None else sorted(nums)


solution = lambda l: sorted(l) if l else []


def solution(nums):
   return sorted(nums) if nums else []


def solution(nums):
   return sorted(nums) if isinstance(nums, list) else []


def solution(nums):
   return sorted(nums or [])


print(solution([1,2,3,10,5]), [1,2,3,5,10])
print(solution(None), [])
print(solution([]), [])
print(solution([20,2,10]), [2,10,20])
print(solution([2,20,10]), [2,10,20])