/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
var _result
  nums.some(function (item, index) {
    var _index = nums.indexOf(target - item)
    if (_index !== -1 && index !== _index) {
      _result = [index, _index]
      return true
    }
  })
  return _result;
};
