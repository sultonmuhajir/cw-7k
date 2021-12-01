"""
|--------------------------------------------------------------------------
| Bumps in the Road
|--------------------------------------------------------------------------
|
"""

def bumps(road):
   return 'Woohoo!' if len(road.replace('_', '')) <= 15 else 'Car Dead'


bumps=lambda s:["Woohoo!","Car Dead"][s.count('n')>15]


import re
def bumps(road):
   return "Woohoo!" if len(re.findall("n", road)) < 16 else "Car Dead"


def bumps(road):
   return "Woohoo!" if road.count("n") <= 15 else "Car Dead"


print(bumps("n"), "Woohoo!")
print(bumps("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead")
print(bumps("______n___n_"), "Woohoo!")
print(bumps("nnnnnnnnnnnnnnnnnnnnn"), "Car Dead")