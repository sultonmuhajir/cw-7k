"""
|--------------------------------------------------------------------------
| The Office IV - Find a Meeting Room
|--------------------------------------------------------------------------
|
"""

def meeting(rooms):
   return rooms.index('O') if 'O' in rooms else 'None available!'


def meeting(rooms):
   try:
      return rooms.index("O")
   except:
      return "None available!"


def meeting(rooms):
   return next((i for i, r in enumerate(rooms) if r == 'O'), 'None available!')


print(meeting(['X', 'O', 'X']), 1)
print(meeting(['O','X','X','X','X']), 0)
print(meeting(['X','X','O','X','X']), 2)
print(meeting(['X']), 'None available!')