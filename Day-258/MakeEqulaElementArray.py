def check(v, x, y):
    for i in v:
        if((i-x==y or i+x==y or i==y) == False):
            return False
    
    return True

class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def solve(self, A, B):

        if(check(A,B,A[0]) or check(A,B,A[0]-B) or check(A,B,A[0]+B)):
            return 1
        return 0
