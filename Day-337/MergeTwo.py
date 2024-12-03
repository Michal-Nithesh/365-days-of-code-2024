class Solution:
    # @param A : list of integers
    # @param B : list of integers
    def merge(self, A, B):
        i=0
        j=0
        l=[]
        while(i<len(A) and j<len(B)):
            if(A[i]>B[j]):
                A.insert(i,B[j])
                j+=1
            else:
                i+=1
        while(j<len(B)):
            A.append(B[j])
            j+=1
        
            

