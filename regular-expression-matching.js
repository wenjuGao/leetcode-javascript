/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length < 1) {
    return !s.length
  }
  var match = false
​
  if (s.length > 0 && (s[0] == p[0] || p[0] == '.')) {
    match = true
  }
  if (p.length > 1 && p[1] == '*') {
    return (match && isMatch(s.slice(1), p)) || isMatch(s, p.slice(2))
  } else {
    return match && isMatch(s.slice(1), p.slice(1))
  }
};
