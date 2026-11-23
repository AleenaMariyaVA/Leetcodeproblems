/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }
    return result.join('');
};
let s = "code";
let indices = [3, 1, 2, 0];
console.log(restoreString(s, indices));