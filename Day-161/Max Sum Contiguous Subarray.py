class Solution:
    # @param A : tuple of integers
    # @return an integer
    def maxSubArray(self, A):
        c,m=0,float('-inf')
        for i in A:
            c=max(i,c+i)
            m=max(c,m)
        return m
