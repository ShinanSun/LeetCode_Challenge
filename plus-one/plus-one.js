/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = digits.slice();
    let length = result.length;
    if (result[length -1] !== 9){
        result[length -1] = result[length -1] + 1
       
    } else {
        for (var i = length -1; i >= 0; i--){
            if (result[i] === 9){
                result[i] = 0
            } else {
                result[i] = result[i] + 1;
                break;
            }
        }
        if (i === -1) {
            result[length] = 1
            result = result.reverse();
        }
    }

    return result;
};