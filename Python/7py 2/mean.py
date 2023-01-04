"""
|--------------------------------------------------------------------------
| Calculate mean and concatenate string
|--------------------------------------------------------------------------
|
"""

def mean(lst):
   num, string = 0, ""
   for i in lst:
      if i in "1234567890": num += int(i)
      else: string += i
   return [num/10, string]


def mean(lst):
   return [sum(int(n) for n in lst if n.isdigit()) / 10.0, "".join(c for c in lst if c.isalpha())]


def mean(lst):
   nums = [int(n) for n in lst if n.isdigit()]
   alpha = [c for c in lst if c.isalpha()]
   return [sum(nums)/10, ''.join(alpha)]


print(mean(["u","6","d","1","i","w","6","s","t","4","a","6","g","1","2","w","8","o","2","0",]), [3.6, "udiwstagwo"])