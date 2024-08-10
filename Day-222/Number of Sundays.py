class Solution:

    # @param A : string

    # @param B : integer

    # @return an integer

    def solve(self, A, B):

        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        if(A==days[-1]):

            return 1+ (B//7) if B%7!=0 else B//7

        else:

            track=0

            i=0

            for i in range(0,7):

                if(days[i]==A):

                    track=7-i

                    break

            if(track>B):

                return 0

            else:

                return 1 + (B-track)//7
