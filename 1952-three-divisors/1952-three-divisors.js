/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let root = Math.sqrt(n);
    if (root !== Math.floor(root)) {
        return false;
    }
    for (let i = 2; i * i <= root; i++) {
        if (root % i === 0) {
            return false;
        }
    }
    return root > 1;
};