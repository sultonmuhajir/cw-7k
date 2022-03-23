"""
|--------------------------------------------------------------------------
| Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
|--------------------------------------------------------------------------
|
"""

def is_same_language(lst): 
   return len(set(map(lambda i: i['language'], lst))) == 1


def is_same_language(lst): 
   return len(set(i["language"] for i in lst)) == 1


def is_same_language(lst): 
   return len({d['language'] for d in lst}) == 1


def is_same_language(lst): 
   return all(map(lambda x: x["language"] == lst[0]["language"], lst))
   

print(is_same_language(0))