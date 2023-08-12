"""
|--------------------------------------------------------------------------
| Determine if the poker hand is flush
|--------------------------------------------------------------------------
|
"""

def is_flush(cards):
   return len(set([i[-1] for i in cards])) == 1


def is_flush(cards):
   return all(i[-1] == cards[0][-1] for i in cards)


def is_flush(cards):
   return len({c[-1] for c in cards}) == 1


def is_flush(cards):
   return all(card.endswith(cards[0][-1]) for card in cards)


print(is_flush(["AS", "3S", "9S", "KS", "4S"]), True)
print(is_flush(["AD", "4S", "7H", "KC", "5S"]), False)
print(is_flush(["AD", "4S", "10H", "KC", "5S"]), False)
print(is_flush(["QD", "4D", "10D", "KD", "5D"]), True)