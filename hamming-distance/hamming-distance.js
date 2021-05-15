/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var distance = x ^ y; // return a 10 bit
    distance = distance.toString(2) // binary;
    var count = 0;
    for (var letter of distance) {
        if (letter === '1') count ++;
    }
    return count;
};