/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  let _resultNum = strs[0].length - 1
  for (let i = 1; i < strs.length; i++) {
    while (
      strs[i - 1].substring(0, _resultNum + 1) !==
      strs[i].substring(0, _resultNum + 1)
    ) {
      _resultNum--
    }
  }
  return strs[0].substring(0, _resultNum + 1) || '' 
};
