"""
|--------------------------------------------------------------------------
| Linked Lists - Push & BuildOneTwoThree
|--------------------------------------------------------------------------
|
"""

class Node:
   def __init__(self, data, next=None):
      self.data = data
      self.next = next

      
def push(head, data):
   return Node(data, head)

   
def build_one_two_three():
   numbers, head = [3, 2, 1], None
   for number in numbers: head = push(head, number)
   return head