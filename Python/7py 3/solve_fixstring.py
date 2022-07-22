"""
|--------------------------------------------------------------------------
| Fix string case
|--------------------------------------------------------------------------
|
"""

def solve(s):
	return s.upper() if len(list(filter(lambda i: i.islower(), s))) < len(s)/2 else s.lower()


def solve(s):
	return (s.lower, s.upper)[sum(map(str.isupper, s)) > len(s) / 2]()


def solve(s):
	return s.upper() if sum(i.isupper() for i in s) > len(s) / 2 else s.lower()
	

print(solve("code"),"code")
print(solve("CODe"),"CODE")
print(solve("COde"),"code")
print(solve("Code"),"code")