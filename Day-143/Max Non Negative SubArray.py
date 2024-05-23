class Solution:
    # @param A : list of integers
    # @return a list of integers
    def maxset(self, A):
        i = 0
        ans = []
        temp = []
        add = 0
        tadd = 0
        for j in range(len(A)):
            if (A[j]>=0):
                temp.append(A[j])
                tadd += A[j]
            if (A[j]<0 or j==len(A)-1):
                if (tadd>add or (tadd==add and (len(temp)>len(ans)))):
                    ans = temp
                    add = tadd
                temp = []
                tadd = 0
                i = j+1
        return ans
        
