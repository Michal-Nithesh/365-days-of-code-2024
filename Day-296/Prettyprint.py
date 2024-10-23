
class Solution:

    # @param A : tuple of integers

    # @return a list of integers

    def repeatedNumber(self, A):

        A = list(A)

        i = 0

        extra = -1

        while i < len(A):

            if (i+1) != A[i]:

                if A[i] == A[A[i] - 1]:

                    extra = A[i]

                    break

                tmp = A[A[i] - 1]

                A[A[i] - 1] = A[i]

                A[i] = tmp

            else:

                i += 1

        total = ((len(A))*(len(A)+1))//2

        csum = sum(A)

        diff = abs(total-csum)

        if (total > csum):

            return [extra, extra + diff]

        return [extra, extra - diff]
