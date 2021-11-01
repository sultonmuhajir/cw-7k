"""
|--------------------------------------------------------------------------
| Remove anchor from URL
|--------------------------------------------------------------------------
|
"""

def remove_url_anchor(url):
   return url.split('#')[0]


def remove_url_anchor(url):
   return url.partition('#')[0]


def remove_url_anchor(url):
   return url[:url.index('#')] if '#' in url else url


import re
def remove_url_anchor(url):
   return re.sub('#.*', '', url)


print(remove_url_anchor("www.codewars.com#about"), "www.codewars.com")
print(remove_url_anchor("www.codewars.com/katas/?page=1#about"), "www.codewars.com/katas/?page=1")
print(remove_url_anchor("www.codewars.com/katas/"), "www.codewars.com/katas/")