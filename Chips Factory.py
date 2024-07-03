class Solution:
    # @param A : list of integers
    # @return a list of integers
    def solve(self, A):
        list1 = []
        list2= []
        for i in A:
            if(i == 0):
                list1.append(i)
            else:
                list2.append(i)
        return list2 + list1
