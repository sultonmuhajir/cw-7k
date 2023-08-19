"""
|--------------------------------------------------------------------------
| Easy wallpaper
|--------------------------------------------------------------------------
|
"""

from math import ceil
def wallpaper(l, w, h):
   return numbers[ceil(l and w and (l + w) * h * 0.4423)]


def wallpaper(l, w, h):
   nums = ['zero','one','two','three','four','five','six','seven','eight','nine', 'ten', 
      'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen', 'twenty']
   return nums[ceil(l and w and ((l + w) * h * 2 * 1.15) / 5.2)]


def wallpaper(l, w, h):
   return "zero" if w*l==0 else numbers[ceil((2*l+2*w) * h * 1.15 / 5.2)]


print(wallpaper(6.3, 4.5, 3.29), "sixteen")
print(wallpaper(7.8, 2.9, 3.29), "sixteen")
print(wallpaper(6.3, 5.8, 3.13), "seventeen")
print(wallpaper(6.1, 6.7, 2.81), "sixteen")
print(wallpaper(0, 5.6, 3.2), "zero")