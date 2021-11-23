/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummyListNode = new ListNode(0);
  dummyListNode.next = head;
  let length = 0;
  let first = head;

  while (first) {
    length++;
    first = first.next;
  }

  length -= n;
  first = dummyListNode;

  while (length > 0) {
    length--;
    first = first.next;
  }

  first.next = first.next.next;

  return dummyListNode.next;
};
