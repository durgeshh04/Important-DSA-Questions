/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if(!head || !head.next || k == 0) return head;

    let tail = head;
    let length = 1;
    while(tail.next){
        tail = tail.next;
        length++;
    }

    tail.next = head;

    let count = length - (k % length);
    while(count > 0){
        head = head.next;
        tail = tail.next;
        count--;
    }
    tail.next = null;
    return head;
};
// @lc code=end

