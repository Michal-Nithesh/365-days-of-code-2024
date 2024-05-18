class Solution:
    # @param A : list of integers
    # @return an integer
    def solve(self, A):
        n = len(A)
        dp = [None]*n
        dp[n-1] = A[-1]
        dp[n-2] = A[-2] + dp[n-1]
        for i in range(n-3,-1,-1):
            dp[i] = A[i] + min(dp[i+1],dp[i+2])
        return dp[0]  
