"""
|--------------------------------------------------------------------------
| Convert a linked list to a string
|--------------------------------------------------------------------------
|
"""

def stringify(node):
   return 'None' if node == None else str(node.data) + ' -> ' + stringify(node.next)


def stringify(node):
   res = ''
   while node:
      res += str(node.data) + ' -> '
      node = node.next
   return res + 'None'


def stringify(node):
   res = []
   while node:
      res.append(str(node.data))
      node = node.next
   return ' -> '.join(res+['None'])


print(stringify(None), 'None')