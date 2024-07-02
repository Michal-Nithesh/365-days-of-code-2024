class Solution:
    # @param a : list of integers
    # @param b : integer
    # @return a list of integers
    def rotateArray(self, a, b):
        i = b%len(a)
        ret = a[i:] + a[:i]
        return ret
