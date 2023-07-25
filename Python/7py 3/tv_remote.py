"""
|--------------------------------------------------------------------------
| TV Remote
|--------------------------------------------------------------------------
|
"""

def tv_remote(word):
   keys = "abcde123fghij456klmno789pqrst.@0uvwxyz_/"
   pos, res = [0, 0], 0
   for x in word:
      i = keys.index(x)
      temp = [(i // 8), i % 8]
      res += abs(temp[0] - pos[0]) + abs(temp[1] - pos[1]) + 1
      pos = temp
   return res


def tv_remote(word):
   kb = {'a':(0,0),'b':(0,1),'c':(0,2),'d':(0,3),'e':(0,4),'1':(0,5),'2':(0,6),'3':(0,7),
      'f':(1,0),'g':(1,1),'h':(1,2),'i':(1,3),'j':(1,4),'4':(1,5),'5':(1,6),'6':(1,7),
      'k':(2,0),'l':(2,1),'m':(2,2),'n':(2,3),'o':(2,4),'7':(2,5),'8':(2,6),'9':(2,7),
      'p':(3,0),'q':(3,1),'r':(3,2),'s':(3,3),'t':(3,4),'.':(3,5),'@':(3,6),'0':(3,7),
      'u':(4,0),'v':(4,1),'w':(4,2),'x':(4,3),'y':(4,4),'z':(4,5),'_':(4,6),'/':(4,7)}
   cur, steps = (0, 0), 0
   for i in word:
      steps += 1 + abs(cur[0] - kb.get(i)[0]) + abs(cur[1] - kb.get(i)[1])
      cur = kb.get(i)
   return steps


print(tv_remote("does"), 16)
print(tv_remote("your"), 23)
print(tv_remote("solution"), 33)
print(tv_remote("work"), 20)
print(tv_remote("for"), 12)
print(tv_remote("these"), 27)
print(tv_remote("words"), 25)