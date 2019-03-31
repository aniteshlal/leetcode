/**
    You are given two non-empty linked lists representing two non-negative integers. The digits
    are stored in reverse order and each of their nodes contain a single digit. Add the two numbers
    and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example:

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
 */


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode answer = null, answerTail = answer;
        int carry = 0, digit = 0;
        while(l1 != null || l2 != null){
            if(l1 == null && l2 != null){   
                digit = (l2.val + carry)%10;
                carry = (l2.val + carry)/10;
                answerTail.next = new ListNode(digit);
                answerTail = answerTail.next;
                answerTail.next = l2.next;
                l2 = l2.next;
                //return answer;
            }else if(l1 != null && l2 == null){
                digit = (l1.val + carry)%10;
                carry = (l1.val + carry)/10;
                answerTail.next = new ListNode(digit);
                answerTail = answerTail.next;
                answerTail.next = l1.next;
                l1 = l1.next;
                //return answer;
            }else{
                digit = (l1.val + l2.val + carry)%10;
                carry = (l1.val + l2.val + carry)/10;
                if(answer == null){
                    answer = new ListNode(digit);
                    answerTail = answer;
                }else{
                    answerTail.next = new ListNode(digit);
                    answerTail = answerTail.next;
                }
                l1 = l1.next;
                l2 = l2.next;
            }

        }
        if(carry == 1){
            answerTail.next = new ListNode(carry);
        }
        return answer;
    }
    
}