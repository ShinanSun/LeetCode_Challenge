/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var result = ""
    
    var first = 0, second = 0, carry = 0;
    var i = a.length -1, j = b.length -1;
    while (i >= 0 || j >=0 ) {
        var sum = ""
        var count = 0;
        if (i < 0) {
            first = 0;
        } else {
            first = a[i]
        }
        if (j < 0) {
            second = 0;
        } else {
            second = b[j]
        }
        sum = first ^ second ^ carry
        result = sum + result;
        if (first === "1") {
            count ++
        }
        if (second === "1") {
            count ++
        }
        if (carry === 1 ) {
            count ++
        }
        if ( count >= 2) {
            carry = 1;
        } else {
            carry = 0;
        }
        
        i--, j--;
    }
    if (carry === 1) {
        result = "1"  + result
    }
    return result;
}