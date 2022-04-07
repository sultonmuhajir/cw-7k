"""
|--------------------------------------------------------------------------
| Find how many times did a team from a given country win the Champions League?
|--------------------------------------------------------------------------
|
"""

def countWins(winnerList, country):
   return len(list(filter(lambda i: i['country'] == country, winnerList)))


def countWins(winners, country):
   return str(winners).count(country)


def countWins(winnerList, country):
   return sum(x.get('country') == country for x in winnerList)


def countWins(winnerList, country):
   return sum(i["country"] == country for i in winnerList)