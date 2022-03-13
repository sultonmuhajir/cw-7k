"""
|--------------------------------------------------------------------------
| Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
|--------------------------------------------------------------------------
|
"""

def count_languages(lst): 
   res = {}
   lng = list(map(lambda i: i['language'], lst))
   for i in lng:
      res[i] = len(list(filter(lambda x: x['language'] == i, lst)))
   return res


from collections import Counter
def count_languages(lst): 
   return Counter([d['language'] for d in lst])


def count_languages(lst): 
   language = [el['language'] for el in lst]
   return {i: language.count(i) for i in language}


def count_languages(lst):
   dic = {}
   for person in lst:
      dic[person['language']] = dic.get(person['language'], 0) + 1
   return dic


list1 = [
   { 'firstName': 'Noah', 'lastName': 'M.', 'country': 'Switzerland', 'continent': 'Europe', 'age': 19, 'language': 'C' },
   { 'firstName': 'Anna', 'lastName': 'R.', 'country': 'Liechtenstein', 'continent': 'Europe', 'age': 52, 'language': 'JavaScript' },
   { 'firstName': 'Ramon', 'lastName': 'R.', 'country': 'Paraguay', 'continent': 'Americas', 'age': 29, 'language': 'Ruby' },
   { 'firstName': 'George', 'lastName': 'B.', 'country': 'England', 'continent': 'Europe', 'age': 81, 'language': 'C' },
   ]        
answer = { 'C': 2, 'JavaScript': 1, 'Ruby': 1 }
print(count_languages(list1), answer)