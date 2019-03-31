/**
    Given a linked list, remove the n-th node from the end of list and return its head.

    Example:

    Given linked list: 1->2->3->4->5, and n = 2.

    After removing the second node from the end, the linked list becomes 1->2->3->5.
    Note:

    Given n will always be valid.

    Follow up:

    Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var temp = head
    var nthNode = head
    var length = 0
    while(temp != null){
        if(length - n > 0){
            nthNode = nthNode.next
        }
        temp = temp.next
        length++
    }
    // console.log(length - n)
    // console.log('len='+length)
    // console.log("n=" +n)
    if(nthNode == head && length - n == 0){
        head = nthNode.next
        console.log(nthNode)
    }
    if(nthNode.next != null)
        nthNode.next = nthNode.next.next
    
    return head
};