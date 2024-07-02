from bisect import bisect_left
class Solution:
    # @param A : list of integers
    # @param B : list of integers
    # @return a list of integers
    def solve(self, A, B):
        n = len(A)
        v = []
        for i in range(n):
            a=A[i]
            if len(v)==0 or a>v[-1][0]:
                v.append((a,i))
        q=len(B)
        ans=[]
        for i in range(q):
            a=B[i]
            if a>v[-1][0]:
                ans.append(-1)
            else:
                ans.append(v[bisect_left(v,(a,0))][1])
        return ans
