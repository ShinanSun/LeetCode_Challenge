/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    //edge case;
    
    if (numerator === 0) return '0';
    if (numerator % denominator === 0) {
        return (numerator / denominator).toString();
    }
    let sign = 1;
    if (numerator < 0) sign *= -1;
    if (denominator < 0) sign *= -1;
    
    let A = Math.abs(numerator);
    let B = Math.abs(denominator);
    let res = Math.floor(A/B).toString();
  
    if (sign < 0) {
        res = '-' + res + '.'
    } else {
        res += '.'
    }
//      console.log(res)
    let appears = {} //0-9 no appears before;
    let decimals = '';
    let mod = A % B; 
    while(mod !== 0) {
        //check if mod appears before? if does, break;
        if (appears[mod] !== undefined) {
            decimals = insert(appears[mod], decimals);
            break;
        }
        
        //never appears before;
        appears[mod] = decimals.length;
        mod *= 10;
        decimals += Math.floor(mod / B).toString();
        mod = mod % B;
    }
    
   return res + decimals; 
};

const insert = function(i, decimals) {
    let front = decimals.slice(0, i);
    let back = decimals.slice(i);
    return front + '(' + back + ')';
}