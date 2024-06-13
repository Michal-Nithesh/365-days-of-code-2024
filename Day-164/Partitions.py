class Solution:
    # @param A : integer
    # @param B : list of integers
    # @return an integer
    def solve(self, A, B):
        v = [0] * A  # prefix array
        v[0] = B[0]

        for i in range(1, A):
            v[i] = v[i - 1] + B[i]

        ans = 0

        if v[A - 1] % 3 != 0:
            return 0

        t = v[A - 1] // 3

        for i in range(A - 2):
            if v[i] == t:
                j = i + 1
                while j < A - 1:
                    if v[j] - v[i] == t:
                        ans += 1
                    j += 1

        return ans
