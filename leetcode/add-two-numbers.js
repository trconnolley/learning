// 2. Add Two Numbers
//LeetCode
//Medium

//https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//Attempt 1
//192ms faster than 27.72%
//46.9MB - less tahn 85.21%

 var addTwoNumbers = function(l1, l2) {

    const node = new ListNode();
    var currNode = node;
    let remainder = 0;

    //while both lists have values, iterate through and add both
    while(l1 && l2) {
        currNode.val = (l1.val + l2.val + remainder) % 10;
        remainder = (l1.val + l2.val + remainder > 9) ? 1 : 0;
        if (l1.next && l2.next) {
            currNode.next = new ListNode();
            currNode = currNode.next;
        };
        l1 = l1.next;
        l2 = l2.next;
    }

    //only one list or neither has remining values
    while(l1 || l2) {
        let v1 = (l1 === null) ? 0 : l1.val;
        let v2 = (l2 === null) ? 0 : l2.val;
        currNode.next = new ListNode();
        currNode = currNode.next;
        currNode.val = (v1 + v2 + remainder) % 10;
        remainder = (v1 + v2 + remainder > 9) ? 1 : 0;
        if (l1) {
            l1 = l1.next;
        };
        if (l2) {
            l2 = l2.next;
        }
    }

    //deal with remianing remainder
    if (remainder > 0) {
        currNode.next = new ListNode();
        currNode = currNode.next;
        currNode.val = 1;
    }
    return node;
};

console.log(1%10);
console.log(5%10);
console.log(9%10);
console.log(10%10);
console.log(11%10);
console.log(15%10);
console.log(18%10);
console.log(0%10);
