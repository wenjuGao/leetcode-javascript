/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sum = 0, // 每个位上的和
    _result = null, // 结果链表
    mid = null // 传递next的中间链表
  while (l1 || l2) {
    let item = 0
    if (l1 && l1.val) item = l1.val + item
    if (l2 && l2.val) item = l2.val + item
    sum = sum + item
    if (_result) {
      mid.next = new ListNode(sum % 10)
      mid = mid.next
    } else {
      mid = new ListNode(sum % 10)
      _result = mid
    }
    sum = Math.floor(sum / 10)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (sum) {
    mid.next = new ListNode(sum)
  }
  return _result
};
