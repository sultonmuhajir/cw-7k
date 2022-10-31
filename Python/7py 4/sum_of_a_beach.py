"""
|--------------------------------------------------------------------------
| Sum of a Beach
|--------------------------------------------------------------------------
|
"""

def sum_of_a_beach(beach):
   res, x = 0, ["sand", "water", "fish", "sun"]
   for i in x: res += len(beach.lower().split(i))-1
   return res


from re import findall, IGNORECASE
def sum_of_a_beach(beach):
   return len(findall('Sand|Water|Fish|Sun', beach, IGNORECASE))


def sum_of_a_beach(beach):
   return sum(beach.lower().count(i) for i in ["sand", "water", "fish", "sun"])


print(sum_of_a_beach("SanD"), 1)
print(sum_of_a_beach("sunshine"), 1)
print(sum_of_a_beach("sunsunsunsun"), 4)
print(sum_of_a_beach("123FISH321"), 1)