"""
|--------------------------------------------------------------------------
| Alphabet war
|--------------------------------------------------------------------------
|
"""

def alphabet_war(fight):
   score = 0
   for i in range(len(fight)):
      if fight[i] == 'w':
         score -= 4
      elif fight[i] == 'p':
         score -= 3
      elif fight[i] == 'b':
         score -= 2
      elif fight[i] == 's':
         score -= 1
      elif fight[i] == 'm':
         score += 4
      elif fight[i] == 'q':
         score += 3
      elif fight[i] == 'd':
         score += 2
      elif fight[i] == 'z':
         score += 1
   return "Left side wins!" if score < 0 else "Right side wins!" if score > 0 else "Let's fight again!"


def alphabet_war(fight):
   result = sum("zdqm".find(c) - "sbpw".find(c) for c in fight)
   return "{} side wins!".format("Left" if result < 0 else "Right") if result else "Let's fight again!"


def alphabet_war(fight):
   d = {'w':4,'p':3,'b':2,'s':1,
      'm':-4,'q':-3,'d':-2,'z':-1}
   r = sum(d[c] for c in fight if c in d)
   return {r==0:"Let's fight again!",
         r>0:"Left side wins!",
         r<0:"Right side wins!"
         }[True]


POWERS  = {c:i for i,c in enumerate('wpbs zdqm',-4)}
def alphabet_war(fight):
   stroke = sum(POWERS[c] for c in fight if c != ' ' and c in POWERS)
   return ['Left side wins!', "Let's fight again!", 'Right side wins!'][ (stroke >= 0) + (stroke > 0) ]


print(alphabet_war("z"), "Right side wins!")
print(alphabet_war("zdqmwpbs"), "Let's fight again!")
print(alphabet_war("wq"), "Left side wins!")
print(alphabet_war("zzzzs"), "Right side wins!")
print(alphabet_war("wwwwww"), "Left side wins!")