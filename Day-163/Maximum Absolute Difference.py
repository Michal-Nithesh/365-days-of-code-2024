class Solution:
    # @param A : list of integers
    # @return an integer
    def maxArr(self, A):
        ans = 0

        C = [0]*len(A)

        B = [0]*len(A)

        for i in range(len(A)):

            B[i] = A[i]-i

        for i in range(len(A)):

            C[i] = A[i]+i

        ans = max(max(B) - min(B) ,max(C) - min(C))

        return ans
