"""
|--------------------------------------------------------------------------
| String Scramble
|--------------------------------------------------------------------------
|
"""

def scarmble(string, array):
   return ''.join([string[array.index(i)] for i in range(len(array))])


def scramble(string, array):
   res = array[:]
   for (i,a) in enumerate(array): res[a]=string[i]
   return "".join(res)


def scramble(string, array):
   return "".join(v for _, v in sorted(zip(array, string)))


print(scramble("abcd", [0, 3, 1, 2]), "acdb")
print(scramble("sc301s", [4, 0, 3, 1, 5, 2]), "c0s3s1")
print(scramble("bskl5", [2, 1, 4, 3, 0]), "5sblk")