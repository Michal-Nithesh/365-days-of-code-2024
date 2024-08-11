import re
class Solution:
    # @param A : string
     # @return an long
    def solve(self, A):
        Sum = 0
        numbers = re.findall(r'\d+', A)
        for i in numbers:
            Sum += int(i)
        return Sum
