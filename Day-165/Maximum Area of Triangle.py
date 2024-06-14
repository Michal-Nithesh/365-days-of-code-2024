import math
class Solution:
    # @param A : list of strings
    # @return an integer
    def solve(self, A):
        r, g, b = [], [], []
        n = len(A)
        m = len(A[0])
        for i in range(n):
            for j in range(m):
                if A[i][j]=='r':
                    r.append(j)
                elif A[i][j]=='b':
                    b.append(j)
                else:
                    g.append(j)
        if len(r) == 0 or len(g) == 0 or len(b) == 0:
            return 0
        ch = [[min(r), max(r)], [min(b), max(b)], [min(g), max(g)]]
        ans = 0 
        for j in range(m):
            first = [n, n, n]
            for i in range(n):
                if A[i][j]=='r':
                    c = 0
                elif A[i][j]=='b':
                    c = 1
                else:
                    c = 2
                first[c] = min(first[c], i)
                for top in range(3):
                    if top!=c and first[top] <i:
                        h = i - first[top]
                        for right in range(3):
                            if top!=right and c!=right :
                                b = max(j - ch[right][0], ch[right][1] - j)
                                ans = max(ans, int(math.ceil((b+1)*(h+1)/2)))
        return ans
                    import math
class Solution:
    # @param A : list of strings
    # @return an integer
    def solve(self, A):
        r, g, b = [], [], []
        n = len(A)
        m = len(A[0])
        for i in range(n):
            for j in range(m):
                if A[i][j]=='r':
                    r.append(j)
                elif A[i][j]=='b':
                    b.append(j)
                else:
                    g.append(j)
        if len(r) == 0 or len(g) == 0 or len(b) == 0:
            return 0
        ch = [[min(r), max(r)], [min(b), max(b)], [min(g), max(g)]]
        ans = 0 
        for j in range(m):
            first = [n, n, n]
            for i in range(n):
                if A[i][j]=='r':
                    c = 0
                elif A[i][j]=='b':
                    c = 1
                else:
                    c = 2
                first[c] = min(first[c], i)
                for top in range(3):
                    if top!=c and first[top] <i:
                        h = i - first[top]
                        for right in range(3):
                            if top!=right and c!=right :
                                b = max(j - ch[right][0], ch[right][1] - j)
                                ans = max(ans, int(math.ceil((b+1)*(h+1)/2)))
        return ans
                    
