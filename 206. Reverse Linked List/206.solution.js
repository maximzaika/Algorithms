/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let temp = head;
  let prevVal = null;

  while (temp !== null) {
    const nextTemp = temp.next;
    temp.next = prevVal;
    prevVal = temp;
    temp = nextTemp;
  }

  return prevVal;
};
