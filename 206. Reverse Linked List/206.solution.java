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
  public ListNode reverseList(ListNode head) {
    ListNode temp = head;
    ListNode prev = null;
    
    while (temp != null) {
      ListNode nextTemp = temp.next;
      temp.next = prev;
      prev = temp;
      temp = nextTemp;
    }
    
    return prev;
  }
}