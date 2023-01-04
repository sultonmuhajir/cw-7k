"""
|--------------------------------------------------------------------------
| esreveR
|--------------------------------------------------------------------------
|
"""

def reverse(lst):
   res = list()
   for i in range(len(lst)): 
      res.append(lst.pop())
   return res


def reverse(lst):
   res = list()
   for x in lst:
      res.insert(0, x)
   return res


def reverse(lst):
   res = list()
   for i in range(len(lst)-1,-1,-1):
      res.append(lst[i])
   return res


print(reverse(list([1,2,3])), [3,2,1])
print(reverse(list([1,None,14,"two"])), ["two",14,None,1])