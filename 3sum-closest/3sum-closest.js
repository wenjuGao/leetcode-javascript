/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length
  if (len < 3) {
    return null
  }
  nums.sort((a, b) => a - b)
  let _result = target - (nums[0] + nums[1] + nums[2])
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1,
      right = len - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === target) {
        return sum
      } else if (sum < target) {
        left++
      } else {
        right--
      }
      if (Math.abs(sum - target) < Math.abs(_result)) {
        _result = target - sum
      }
    }
  }
  return target - _result
};
