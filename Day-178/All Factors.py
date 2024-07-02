import math

class Solution:
	# @param A : integer
	# @return a list of integers
	def allFactors(self, A):
	    factors = []
	    factors2 = []
	    # brute force
	    for x in range(1, int(math.sqrt(A))+1):
	        d, m = divmod(A, x)
	        if m == 0:
	            factors.append(x)   # sorted
	            if d != x:
	               factors2.append(d) # reverse sort
	               
	    factors2.reverse()
	    return factors + factors2
	    

