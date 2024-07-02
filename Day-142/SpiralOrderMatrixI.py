class Solution:
    # @param A : tuple of list of integers
    # @return a list of integers
    def spiralOrder(self, A):
        lst = []
        t = 0
        b = len(A) - 1
        l = 0
        r = len(A[0]) - 1
        dir = 0
        while(t <= b and l <= r):
            if(dir == 0):
                for i in range(l,r+1):
                    lst.append(A[t][i])
                t += 1
            elif(dir == 1):
                for i in range(t,b+1):
                    lst.append(A[i][r])
                r -= 1
            elif(dir == 2):
                for i in range(r,l-1,-1):
                    lst.append(A[b][i])
                b -= 1
            elif (dir == 3):
                for i in range(b,t-1,-1):
                    lst.append(A[i][l])
                l += 1
            dir = (dir + 1) % 4
        return lst
