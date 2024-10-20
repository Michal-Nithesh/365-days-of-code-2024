class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def searchInsert(self, A, B):
        n = len(A)
        low = 0
        high = n - 1
        while low <= high:
            mid = (low + high)/2
            if A[mid] == B:
                return mid
            elif A[mid] < B:
                low = mid + 1
            else:
                high = mid - 1
        return low
