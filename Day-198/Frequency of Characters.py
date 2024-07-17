class Solution:
    # @param A : string
    # @return a list of integers
    def solve(self, A):
        ls=[]
    	ss="abcdefghijklmnopqrstuvwxyz"
    	for i in range(len(ss)):
        	ls.append(A.count(ss[i]))
    	return(ls)
