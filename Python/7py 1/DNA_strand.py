"""
|--------------------------------------------------------------------------
| Complementary DNA
|--------------------------------------------------------------------------
|
"""

def DNA_strand(dna):
   res = ""
   for i in range(len(dna)):
      res += 'T' if dna[i] == 'A' else 'A' if dna[i] == 'T' else 'C' if dna[i] == 'G' else 'G'
   return res


import string
def DNA_strand(dna):
   return dna.translate(string.maketrans("ATCG","TAGC"))


def DNA_strand(dna):
   reference = { "A":"T", "T":"A", "C":"G", "G":"C" }
   return "".join([reference[x] for x in dna])


def DNA_strand(dna):
   return ''.join([{'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}[letter] for letter in dna])


print(DNA_strand("AAAA"),"TTTT","String AAAA is")
print(DNA_strand("ATTGC"),"TAACG","String ATTGC is")
print(DNA_strand("GTAT"),"CATA","String GTAT is")