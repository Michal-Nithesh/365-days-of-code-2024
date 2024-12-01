class Solution:
    # @param A : string
    # @param B : integer
    # @return a strings
    def solve(self, A, B):
        ans=""
        c=1
        ch=A[0]
        for i in range(1,len(A)):
            if(A[i] == ch):
                c=c+1
            else:
                if(c!=B):
                    for j in range(0,c):
                        ans+=ch
                ch=A[i]
                c=1
        if(c!=B):
            for j in range(0,c):
                ans+=ch
        return ans
