"""
|--------------------------------------------------------------------------
| Simple remove duplicates
|--------------------------------------------------------------------------
|
"""

def solve(arr): 
   return [v for i, v in enumerate(arr) if v not in arr[i+1:]]


def solve(arr): 
   return list(dict.fromkeys(arr[::-1]))[::-1]


def solve(arr): 
   return sorted(set(arr), key=arr[::-1].index)[::-1]


print(solve([3,4,4,3,6,3]),[4,6,3])
print(solve([1,2,1,2,1,2,3]),[1,2,3])
print(solve([1,2,3,4]),[1,2,3,4])
print(solve([1,1,4,5,1,2,1]),[4,5,2,1])