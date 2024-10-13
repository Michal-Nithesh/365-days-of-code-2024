class Solution:
    # @param A : list of integers
    # @return a list of integers
    def solve(self, A):
# create an empty list to append numbers
        c = []
        n = len(A)
        # create a for loop till the len of A
        for i in range(n):
# Append the square of the integers into C
            c.append(A[i] * A[i])
# Sort the c list
           
        c.sort()
       
        return c
