/*
    Given a linked list, swap every two adjacent nodes and return its head.

    You may not modify the values in the list's nodes, only nodes itself may be changed.

    

    Example:

    Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var dummy = new ListNode(0)
    dummy.next = head
    var prev = dummy
    while(prev.next && prev.next.next){
        var curr = prev.next
        var next = curr.next
        curr.next = next.next
        next.next = curr
        prev.next = next
        prev = curr
    }
    return dummy.next
};