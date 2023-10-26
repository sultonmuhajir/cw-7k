"""
|--------------------------------------------------------------------------
| Coding Meetup #2 - Higher-Order Functions Series - Greet developers
|--------------------------------------------------------------------------
|
"""

def greet_developers(lst):
   for i in range(len(lst)):
      lst[i]['greeting'] = f"Hi {lst[i]['firstName']}, what do you like the most about {lst[i]['language']}?"
   return lst


def greet_developers(lst): 
   return [ {**dev, 'greeting': f"Hi {dev['firstName']}, what do you like the most about {dev['language']}?"} for dev in lst ]


def greet_developers(lst):
   for i in lst:
      i.update({"greeting": "Hi {firstName}, what do you like the most about {language}?".format(**i)})
   return lst


def greet_developers(lst): 
   return [dict(n,**{'greeting':f"Hi {n['firstName']}, what do you like the most about {n['language']}?"}) for n in lst]


list1 = [
   { 
      'firstName': 'Sofia',
      'lastName': 'I.',
      'country': 'Argentina',
      'continent': 'Americas',
      'age': 35, 
      'language': 'Java' 
   },
   { 
      'firstName': 'Lukas',
      'lastName': 'X.',
      'country': 'Croatia',
      'continent': 'Europe',
      'age': 35, 
      'language': 'Python' 
   },
   { 
      'firstName': 'Madison',
      'lastName': 'U.',
      'country': 'United States',
      'continent': 'Americas',
      'age': 32, 
      'language': 'Ruby' 
   } 
]
print(greet_developers(list1))