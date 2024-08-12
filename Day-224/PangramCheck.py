class Solution:
    # @param A : list of strings
    # @return an integer
    def solve(self, A):
        alpha = "abcdefghijklmnopqrstuvwxyz"
        b = "".join(A)
        b = set(b)
        b = "".join(sorted(b))
        if b == alpha:
            return 1
        else:
            return 0
