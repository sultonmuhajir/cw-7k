"""
|--------------------------------------------------------------------------
| Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
|--------------------------------------------------------------------------
|
"""

def get_first_python(users):
   x = list(filter(lambda i: i['language'] == 'Python', users))
   return "There will be no Python developers" if len(x) < 1 else x[0]['first_name'] + ', ' + x[0]['country']


def get_first_python(users):
   return next(('{}, {}'.format(d['first_name'],d['country']) for d in users if d['language'] == 'Python'),'There will be no Python developers')


def get_first_python(users):
   for data in users:
      if data['language'] == 'Python':
         return f'{data["first_name"]}, {data["country"]}'
   return 'There will be no Python developers'


def get_first_python(users):
   for x in users:
      try:
         if x["language"] == "Python":
               return f"{x['first_name']}, {x['country']}"
      except:
         pass
   return "There will be no Python developers"