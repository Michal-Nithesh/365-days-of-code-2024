import numpy as np
class Solution:
    # @param A : list of integers
    # @return a strings
    def solve(self, A):
        return np.var(A).round(2)
