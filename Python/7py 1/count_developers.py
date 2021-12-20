"""
|--------------------------------------------------------------------------
| Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
|--------------------------------------------------------------------------
|
"""

def count_developers(lst):
   return len(list(filter(lambda i: i['continent'] == 'Europe' and i['language'] == 'JavaScript', lst)))


def count_developers(lst):
   return sum(x["language"] == "JavaScript" and x["continent"] == "Europe" for x in lst)


def count_developers(lst):
   return sum(1 for i in lst if i["continent"] == 'Europe' and i["language"] == 'JavaScript')


def count_developers(lst):
   return sum(dev["language"]=="JavaScript" and dev["continent"]=="Europe" for dev in lst)


list1 = [
{ 'firstName': 'Noah', 'lastName': 'M.', 'country': 'Switzerland', 'continent': 'Europe', 'age': 19, 'language': 'JavaScript' },
{ 'firstName': 'Maia', 'lastName': 'S.', 'country': 'Tahiti', 'continent': 'Oceania', 'age': 28, 'language': 'JavaScript' },
{ 'firstName': 'Shufen', 'lastName': 'L.', 'country': 'Taiwan', 'continent': 'Asia', 'age': 35, 'language': 'HTML' },
{ 'firstName': 'Sumayah', 'lastName': 'M.', 'country': 'Tajikistan', 'continent': 'Asia', 'age': 30, 'language': 'CSS' }
]

print(count_developers(list1))