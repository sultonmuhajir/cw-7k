"""
|--------------------------------------------------------------------------
| Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
|--------------------------------------------------------------------------
|
"""

def is_ruby_coming(lst): 
   return len(list(filter(lambda i: i['language'] == 'Ruby', lst))) > 0


def is_ruby_coming(lst): 
   return any(x["language"] == "Ruby" for x in lst)


def is_ruby_coming(lst): 
   for i in lst:
      if i['language'] == 'Ruby':
         return True
   return False


def is_ruby_coming(lst): 
   return next((True for i in lst if i['language'] == 'Ruby'), False)