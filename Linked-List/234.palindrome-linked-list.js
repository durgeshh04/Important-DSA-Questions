/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const reverse = (head) => {
    let node = null;
    while(head){
        let temp = head.next;
        head.next = node;
        node = head;
        head = temp;
    }
    return node;
}
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let rev = reverse(slow);

    while(rev){
        if(head.val !== rev.val){
            return false;
        }

        head = head.next;
        rev = rev.next;
    }
    return true;
};
// @lc code=end

