class Solution:
    # @param A : list of integers
    # @return an integer
    def solve(self, A):
        A.sort()
        count=0
        for i in range(len(A)-2):
            for j in range(i+1, len(A)-1):
                if A[j]%A[i]==0:
                    if A[j+1:].count(A[j]*(A[j]//A[i]))>0:
                        if A[i]==A[j]:
                            count+=A[j+1:].count(A[j]*(A[j]//A[i]))*6
                        else:
                            count+=A[j+1:].count(A[j]*(A[j]//A[i]))
        return count

