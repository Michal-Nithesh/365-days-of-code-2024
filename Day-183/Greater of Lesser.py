class Solution:
    # @param A : list of integers
    # @param B : list of integers
    # @param C : integer
    # @return an integer
    def solve(self, A, B, C):
		total_A = 0
		total_B = 0
		
		for num in A:
			if num > C:
				total_A += 1
				
		for num1 in B:
			if num1 < C:
				total_B += 1
		
		return max(total_A ,total_B)
