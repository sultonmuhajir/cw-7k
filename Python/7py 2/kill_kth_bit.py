"""
|--------------------------------------------------------------------------
| Simple Fun #8: Kill K-th Bit
|--------------------------------------------------------------------------
|
"""

def kill_kth_bit(n, k):
   return n & ~(1 << (k - 1))


def kill_kth_bit(_n, k):
   n = list(bin(_n))
   if len(n) > k: n[-k] = '0' 
   return int(''.join(n) , 2)


def kill_kth_bit(n, k):
   x = list(bin(n)[2:])
   try: x[-k] = "0"
   except: return n
   return int("".join(x),2)


print(kill_kth_bit(37,3) , 33)
print(kill_kth_bit(37,4) , 37)
print(kill_kth_bit(0,4) , 0)
print(kill_kth_bit(2147483647,16) , 2147450879)
print(kill_kth_bit(374823748,13) , 374819652)
print(kill_kth_bit(1084197039,15) , 1084197039)