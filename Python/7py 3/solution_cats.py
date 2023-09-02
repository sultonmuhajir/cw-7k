"""
|--------------------------------------------------------------------------
| Cats and shelves
|--------------------------------------------------------------------------
|
"""

def solution(start, finish):  
   diff = finish-start
   return ((diff / 3) + (diff % 3))//1


def solution(start, finish):
   count = 0
   while start != finish:
      if start + 3 <= finish: start +=3
      else: start +=1
      count += 1
   return count


def solution(start, finish):
   return sum(divmod(finish-start, 3))


print(solution(1,5), 2)
print(solution(2,4), 2)