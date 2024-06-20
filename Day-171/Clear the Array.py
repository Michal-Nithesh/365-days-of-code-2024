class Solution:
    # @param A : list of integers
    # @return an integer
    def solve(self, A):
        dict_1 = {}
        for ch in A:
            if ch not in dict_1:
                dict_1[ch] = 1
            else:
                dict_1[ch] += 1
        
        max_val = 0
        for k,v in dict_1.items():
            max_val = max(max_val, v)
        
        return max_val
