"""
|--------------------------------------------------------------------------
| Linked Lists - Append
|--------------------------------------------------------------------------
|
"""

class Node(object):
   def __init__(self, data):
      self.data = data
      self.next = None
def append(listA, listB):
   if not listA: return listB
   listA.next = append(listA.next, listB)
   return listA


def append(listA, listB):
   return listB if not listA else Node(listA.data, append(listA.next, listB))


def append(listA, listB):
   head = listA
   if not head: return listB
   while listA.next: listA = listA.next
   listA.next = listB
   return head