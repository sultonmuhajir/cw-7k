"""
|--------------------------------------------------------------------------
| Cost of my ride
|--------------------------------------------------------------------------
|
"""

def insurance(age, size, num_of_days): 
   xAge = 10 if age < 25 else 0
   xSize = 0 if size == 'economy' else 10 if size == 'medium' else 15
   return (50 + xAge + xSize) * num_of_days if num_of_days > 0 else 0


insurance = lambda a, sz, n: (p:=n*((a<25)*10 + 50 + (sz!='economy')*(((sz=='medium') and 10) or 15)))>0 and p or 0


sc={'economy':0,'medium':10,'full-size':15}
def insurance(a,s,n): 
   return (50+(a<25)*10+sc.get(s,15))*max(0,n)


def insurance(age, size, num_of_days): 
   return (50 + (10 if age < 25 else 0) + (10 if size == "medium" else 0 if size == "economy" else 15)) * max(num_of_days, 0)


print(insurance(18, "medium", 7), 490)
print(insurance(30,"full-size",30),1950)
print(insurance(21,"economy",-10), 0)
print(insurance(42,"my custom car",7), 455)