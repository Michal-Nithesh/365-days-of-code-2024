import math
class Solution:
    # @param A : integer
    # @param B : integer
    # @return an integer
    def gcd(self,a,b):
        if(b==0):
            return a
        return self.gcd(b,a%b)
    def cpFact(self, A, B):
        while(self.gcd(A,B)!=1):
            A=A/self.gcd(A,B)
        return int(A)
