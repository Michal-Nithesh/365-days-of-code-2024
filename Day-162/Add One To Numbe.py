class Solution:
    # @param A : list of integers
    # @return a list of integers
    def plusOne(self, A):
        res=[]
        s=''
        for i in A:
            s+=str(i)
        s=str(int(s)+1)
        for i in s:
            res.append(int(i))
        return res
