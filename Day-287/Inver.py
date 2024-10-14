# Definition for a  binary tree node
# class TreeNode:
#	def __init__(self, x):
#		self.val = x
#		self.left = None
#		self.right = None

class Solution:
	# @param A : root node of tree
	# @return the root node in the tree
    def invertTree(self, root):
        if root is None:
            return 0
        self.invertTree(root.left)
        self.invertTree(root.right)
        root.left,root.right=root.right,root.left
        return root
