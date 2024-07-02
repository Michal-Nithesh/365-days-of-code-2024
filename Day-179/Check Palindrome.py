class Solution:
    # @param A : string
    # @return an integer
    def solve(self, A):
        result = []
        for i in A:
            if i not in result:
                result.append(i)
            elif i in result:
                result.remove(i)
        if(len(result)<=1):
            return 1
        return 0   
