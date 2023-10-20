"""
|--------------------------------------------------------------------------
| Rock Paper Scissors Lizard Spock
|--------------------------------------------------------------------------
|
"""

def rpsls(pl1, pl2):
   if pl1 == pl2: return "Draw!"
   x = {
      "scissors": ["lizard", "paper"],
      "paper": ["rock", "spock"],
      "rock": ["lizard", "scissors"],
      "lizard": ["spock", "paper"],
      "spock": ["scissors", "rock"]
   }
   return "Player 1 Won!" if pl2 in x[pl1] else "Player 2 Won!"


rpsls = lambda a, b: "Draw!"*(a==b) or f"Player {2-(a[1]+b[1]in'oipcapociao')} Won!"


def rpsls(pl1, pl2):
   values = ["scissors", "paper", "rock", "lizard", "spock"]
   if pl1 == pl2: return "Draw!"
   index_pl1, index_pl2 = values.index(pl1), values.index(pl2)
   if (index_pl2 - index_pl1) % 5 in [1, 3]: return "Player 1 Won!"
   else: return "Player 2 Won!"


print(rpsls("rock", "lizard"), "Player 1 Won!")
print(rpsls("paper", "rock"), "Player 1 Won!")
print(rpsls("scissors", "lizard"), "Player 1 Won!")
print(rpsls("lizard", "paper"), "Player 1 Won!")
print(rpsls("spock", "rock"), "Player 1 Won!")
print(rpsls("lizard", "scissors"), "Player 2 Won!")
print(rpsls("spock", "lizard"), "Player 2 Won!")
print(rpsls("paper", "lizard"), "Player 2 Won!")
print(rpsls("scissors", "spock"), "Player 2 Won!")
print(rpsls("rock", "spock"), "Player 2 Won!")
print(rpsls("rock", "rock"), "Draw!")
print(rpsls("spock", "spock"), "Draw!")