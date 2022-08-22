"""
|--------------------------------------------------------------------------
| All Star Code Challenge #1
|--------------------------------------------------------------------------
|
"""

def sum_ppg(player_one, player_two):
   return player_one['ppg'] + player_two['ppg']


def sum_ppg(playerOne, playerTwo):    
   return playerOne.get('ppg', 0) + playerTwo.get('ppg', 0)


import functools
def sum_ppg(*p):
   return functools.reduce(lambda x, y: x+y['ppg'], p, 0)


def sum_ppg(*players):
   return sum(player.get('ppg') for player in players)


iverson = { 'team': '76ers', 'ppg': 11.2 }
jordan  = { 'team': 'bulls', 'ppg': 20.2 }
print(31.4, sum_ppg(iverson, jordan), 'Failed to sum iverson\'s and jordan\'s scores')