class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def solve(self, A, B):
        keyCount = A.count(B)
        index = 0
        if keyCount == 0:
            for i in range(len(A)):
                if A[i] < B:
                    continue
                else:
                    index = i - 1
                    break
            else:
                index = len(A) - 1
        else:
            count = 0
            for i in range(len(A)):
                if A[i] == B:
                    count += 1
                if count == keyCount:
                    index = i
                    break
        return len(A[:index+1])
