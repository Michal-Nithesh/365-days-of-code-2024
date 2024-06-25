class Solution:
    # @param A : list of integers
    # @return a list of integers
    def solve(self, A):
        S = len(A)
        X = []
        Y = []
        for i in range(0,S):
            if (A[i] < A[S-1]):
                Y = A[i:].copy()
                break
            else:
                X.append(A[i])
        Y.reverse()
        X.extend(Y)
        
        return X
        
