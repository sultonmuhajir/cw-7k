"""
|--------------------------------------------------------------------------
| All Inclusive?
|--------------------------------------------------------------------------
|
"""

def contain_all_rots(strng, arr):
   count = 0
   for i in range(len(strng)):
      if strng[i:len(strng)]+strng[0:i] in arr: count += 1
   return count == len(strng)


def contain_all_rots(s, l):
   return all(s[i:]+s[:i] in l for i in range(len(s)))


def contain_all_rots(strng, arr):
   if strng == "": return True
   i, l = 0, len(strng)
   while i < l:
      strng = strng[-1]+strng[:-1]
      if not strng in arr: return False
      i += 1
   return True


print(contain_all_rots("", []), True)
print(contain_all_rots("", ["bsjq", "qbsj"]), True)
print(contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), True)
print(contain_all_rots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), False)