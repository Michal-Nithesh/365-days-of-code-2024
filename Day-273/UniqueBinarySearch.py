
# Definition for a  binary tree node

# class TreeNode:

#     def __init__(self, x):

#         self.val = x

#         self.left = None

#         self.right = None



class Solution:

    # @param A : integer

    # @return a list of TreeNode 

    def generateTrees(self, A):

        def generate(st,en):

            if en < st:

                return [None]

            if en == st:

                return [TreeNode(en)]

            ans = []

            for i in range(st,en+1):

                left = generate(st,i-1)

                right = generate(i+1,en)

                for l in left:

                    for r in right:

                        root = TreeNode(i)

                        root.left = l

                        root.right = r

                        ans.append(root)

            return ans

        return generate(1,A)
