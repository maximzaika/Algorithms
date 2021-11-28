/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
  public Node connect(Node root) {
    // if node is empty return it
    if (root == null) return root;

    // initialize a queue that contains root tree for parsing
    Queue<Node> Q = new LinkedList<Node>(); 
    // populate queue with the root
    Q.add(root);

    // iterate over each level of the queue
    while (Q.size() > 0) {
      // size of the level
      int queueLen = Q.size();
      // iterate over the level
      for(int i = 0; i < queueLen; i++) {
          // pop node from the front of the queue
          Node node = Q.poll();
          // ensure we do not go beyond the level of the node
          if (i < queueLen - 1) node.next = Q.peek();
          // add children to the back of the queue (left and right if any)
          if (node.left != null) Q.add(node.left);
          if (node.right != null) Q.add(node.right);
      }
    }

    // return modified root
    return root;
  }
}