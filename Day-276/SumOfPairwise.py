class Solution:
	# @param A : tuple of integers
	# @return an integer
	def hammingDistance(self, A):
		ans = 0
		mod = 1000000007
		for j in range(32):
			set_count = 0
			not_set_count = 0
			
			for i in range(len(A)):
				if A[i] & (1 << j):
					set_count = (set_count + 1) % mod
				else:
					not_set_count = (not_set_count + 1) % mod
			
			ans = (ans + (set_count * not_set_count * 2)) % mod

		return int(ans)
