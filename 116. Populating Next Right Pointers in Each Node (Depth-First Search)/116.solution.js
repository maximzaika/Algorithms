/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // if node is empty return it
  if (root === null) return root;

  // initialize a queue that contains root tree for parsing
  const queue = [root];

  // iterate over each level of the queue
  while (queue.length) {
    // size of the level
    const queueLen = queue.length;
    // iterate over the level
    for (let i = 0; i < queueLen; i++) {
      // pop node from the front of the queue
      const node = queue.shift();
      // ensure we do not go beyond the level of the node
      if (i < queueLen - 1) node.next = queue[0];
      // add children to the back of the queue (left and right if any)
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  // return modified root
  return root;
};
