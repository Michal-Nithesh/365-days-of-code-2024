class Solution:
    # @param A : integer
    # @param B : integer
    # @param C : integer
    # @return an integer
    def solve(self, A, B, C):
        for i in range(A,B+1):
            if str(C)==str(i)[-1]:
                return int(((B-i)/10)+1)
                break
            if all(str(C) != str(i)[-1] for i in range(A, B + 1)):
                return 0
