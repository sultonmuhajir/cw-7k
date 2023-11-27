"""
|--------------------------------------------------------------------------
| Fun with lists: lastIndexOf
|--------------------------------------------------------------------------
|
"""

def last_index_of(head, value):
   res, i, node = -1, 0, head
   while node:
      if node.data == value: res = i
      i += 1
      node = node.next
   return res


def last_index_of(head, search_val, index=0, res=-1):
   if head is None: return res
   if head.data == search_val: res = index
   return last_index_of(head.next, search_val, index+1, res)


def last_index_of(head, value):
   index, current = -1, 0
   while head is not None:
      if head.data == value: index = current
      head, current = head.next, current+1
   return index


print(last_index_of([1, 2, 3], 2), 1)
print(last_index_of(["aaa", "b", "abc"], "aaa"), 0)
print(last_index_of([17, "17", 1.2], 17), 0)
print(last_index_of([17, "17", 1.2], "17"), 1)
print(last_index_of([1, 2, 3, 3], 3), 3)