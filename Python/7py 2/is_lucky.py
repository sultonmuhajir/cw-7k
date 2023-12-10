"""
|--------------------------------------------------------------------------
| Lucky Bus Ticket
|--------------------------------------------------------------------------
|
"""

def is_lucky(ticket):
   if len(ticket) == 6 and ticket.isdigit():
      num = list(map(int, ticket))
      return sum(num[:3]) == sum(num[3:])
   else:
      return False
   

def is_lucky(t):
   return len(t) == 6 and t.isdigit() and sum(map(int, t[:3])) == sum(map(int, t[3:]))


def is_lucky(t):
   try: return len(t)==6 and eval('+'.join(t[:3]))==eval('+'.join(t[3:]))
   except: return False


print(is_lucky('123321'), True)
print(is_lucky('12341234'), False)
print(is_lucky('100001'), True)
print(is_lucky('100200'), False)
print(is_lucky('912435'), True)
print(is_lucky('12a12a'), False)
print(is_lucky('999999'), True)
print(is_lucky('1111'), False)
print(is_lucky('000000'), True)
print(is_lucky(''), False)