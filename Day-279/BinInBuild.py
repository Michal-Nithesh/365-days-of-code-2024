class Solution:
    # @param A : integer
    # @return an integer
    def numSetBits(self, A):
        bnum  = (bin(A)[2:])
        c = 0
        for i in str(bnum):
            if(i == '1'):
                c += 1
        return c
