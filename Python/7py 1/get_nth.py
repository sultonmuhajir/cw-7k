"""
|--------------------------------------------------------------------------
| Linked Lists - Get Nth Node
|--------------------------------------------------------------------------
|
"""

class Node(object):
   def __init__(self, data):
      self.data = data
      self.next = None
def get_nth(node, index):
   return node if node and not index else get_nth(node.next, index -1)


class Node(object):
   def __init__(self, data):
      self.data = data
      self.next = None
def get_nth(node, index):
   if node and index >= 0: return node if index < 1 else get_nth(node.next, index - 1)
   raise ValueError


class Node(object):
   def __init__(self, data):
      self.data = data
      self.next = None
def get_nth(node, index, i=0):
   if node is None: raise IndexError
   else: return node if index == i else get_nth(node.next, index, i + 1)