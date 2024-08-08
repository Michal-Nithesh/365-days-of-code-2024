import re
class Solution:
    # @param A : string
    # @return an integer
    def solve(self, A):
        return 1 if bool(re.match(r'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%&!$*])[A-Za-z\d@#%&!$*]{8,15}$', A)) else 0
