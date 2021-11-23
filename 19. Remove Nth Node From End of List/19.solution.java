/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummyListNode = new ListNode(0);
    dummyListNode.next = head;
    int length = 0;
    ListNode first = head;
    
    while (first != null) {
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
  }
}