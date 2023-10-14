"""
|--------------------------------------------------------------------------
| Alan Partridge I - Partridge Watch
|--------------------------------------------------------------------------
|
"""

def part(arr):
   count, x = 0, ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"]
   for i in arr:
      if i in x: count += 1
   return f"Mine's a Pint{'!' * count}" if count != 0 else "Lynn, I've pierced my foot on a spike!!"


def part(arr):
   terms = {'Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'}
   marks = ''.join('!' for x in arr if x in terms)
   return "Mine's a Pint" + marks if marks else "Lynn, I've pierced my foot on a spike!!"


def part(arr: list[str]) -> str:
   terms = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad']
   count = 0
   for i in arr:        
      if i in terms: count += 1
   if count == 0: return "Lynn, I've pierced my foot on a spike!!"
   else: return "Mine's a Pint"+'!'*count


print(part(["Grouse", "Partridge", "Pheasant"]), "Mine's a Pint!")
print(part(["Pheasant", "Goose", "Starling", "Robin"]), "Lynn, I've pierced my foot on a spike!!")
print(part(["Grouse", "Partridge", "Partridge", "Partridge", "Pheasant"]), "Mine's a Pint!!!")
print(part([]), "Lynn, I've pierced my foot on a spike!!")
print(part(["Grouse", "Partridge", "Pheasant", "Goose", "Starling", "Robin", "Thrush", "Emu", "PearTree", "Chat", "Dan", "Square", "Toblerone", "Lynn", "AlphaPapa", "BMW", "Graham", "Tool", "Nomad", "Finger", "Hamster"]), "Mine's a Pint!!!!!!!!")