class Solution:
    # @param A : integer
    # @param B : integer
    # @param C : integer
    # @return an integer
    def Mod(self, A, B, C):
        if B == 0:
            if A == 0:
                return 0
            return 1
        elif B % 2 == 0:
            res = self.Mod(A, B // 2, C)
            return (res * res) % C
        else:
            res = self.Mod(A, B - 1, C)
            return ((A % C) * res) % C
