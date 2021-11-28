import collections 
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':
      # if node is empty return it
      if not root:
        return root
      # initialize a queue that contains root tree for parsing
      Q = collections.deque([root])
      # iterate over each level of the queue
      while Q:
        # size of the level
        queueLen = len(Q)
        # Iterate over all the nodes on the current level
        for i in range(queueLen):
          # iterate over the level
          node = Q.popleft()
          # ensure we do not go beyond the level of the node
          if i < queueLen - 1:
              node.next = Q[0]

          # add children to the back of the queue (left and right if any)
          if node.left:
              Q.append(node.left)
          if node.right:
              Q.append(node.right)

      # return modified root (tree)
      return root
        