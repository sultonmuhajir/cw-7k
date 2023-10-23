"""
|--------------------------------------------------------------------------
| Fun with lists: indexOf
|--------------------------------------------------------------------------
|
"""

def index_of(head, value):
   i = 0
   while head:
      if head.data == value: return i
      head = head.next
      i += 1
   return -1


def index_of(node, value, i=0):
   return -1 if node is None else i if node.data == value else index_of(node.next, value, i+1)


def index_of(head, value): 
   i=0
   while head and head.data!=value:
      i+=1
      head=head.next
   return i if head else -1