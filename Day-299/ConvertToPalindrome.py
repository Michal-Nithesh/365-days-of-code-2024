class Solution:
    # @param A : string
    # @return an integer
    def solve(self, a):
        left = 0
        right = len(a) - 1
       
        while left < right:
            if a[left] == a[right]:
                left += 1
                right -= 1
            else:
                if a[left+1:right+1] == a[left+1:right+1][::-1]:
                    return 1
                if a[left:right] == a[left:right][::-1]:
                    return 1
                return 0
       
        return 1
