"""
|--------------------------------------------------------------------------
| Moves in squared strings (I)
|--------------------------------------------------------------------------
|
"""

vert_mirror = lambda s: [i[::-1] for i in s]
hor_mirror = lambda s: list(reversed(s))
oper = lambda f, s: '\n'.join(f(s.split("\n")))


def vert_mirror(strng):
   return map(reversed, strng)
def hor_mirror(strng):
   return reversed(strng)
def oper(fct, s):
   return '\n'.join(map(''.join, fct(s.split('\n'))))


print(oper(vert_mirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw")
print(oper(vert_mirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP")
print(oper(hor_mirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt")
print(oper(hor_mirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK")