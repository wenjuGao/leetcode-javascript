/**
* 容纳最多的水，就 x 轴与两个 y 轴形成的面积。那么本题就成了求两个尽可能远的 y 轴形成的最大矩形面积
​
* 按照暴力的逻辑，我们可枚举出所有的面积，然后出现的最大面积即是要求的结果。
​
* 暴力方法需要双层循环枚举 y 轴的组合，根据找两个相距最远的较大 y 轴逻辑，可以优化成：
​
* 声明两个指针分别从 height 的首尾开始枚举 y 周组合。
​
* -   i 从 0 开始，j 从 height.length-1 开始，
* -   i >= j 越界越界后枚举的组合均为计算过的组合（i =j 时 y 轴重合）
* -   计算面积时取两个指针中较小的一个
*/
​
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0,
        j = height.length - 1,
        _result = 0
    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i)
        _result = Math.max(_result, area)
        if (height[i] <= height[j]) {
            ++i
        } else {
            --j
        }
    }
    return _result
};
