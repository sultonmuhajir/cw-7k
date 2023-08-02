"""
|--------------------------------------------------------------------------
| Fun with lists: length
|--------------------------------------------------------------------------
|
"""

def length(head):
   return 1 + length(head.next) if head else 0


def length(head):
   count = 0
   while head != None:
      count += 1
      head = head.next
   return count


def length(head): 
   if head is None: return 0
   return 1 + length(head.next)