/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    //edges;
    if (denominator === 0) return '';
    if (numerator === 0) return '0';
    
    let sign = 1;
    if (denominator < 0) sign *= -1;
    if (numerator < 0) sign *= -1;
    
    let A = Math.abs(numerator);
    let B = Math.abs(denominator);
    
    let ret = '';
    if (sign < 0) {
        ret += '-'
    }
    let num = A / B;
    if ( A % B === 0) {
        return ret += num.toString();
    } else {
        ret += (Math.floor(num).toString() + '.');
    }
    
    let mod = A % B;
    let map = {};
    let decimals = ''
    while(mod !== 0) {
        if (map[mod] !== undefined) {
            decimals = insert(map[mod], decimals);
            break;
        }
        
        
        map[mod] = decimals.length; //map[3] = 0
        mod *= 10;
        decimals += Math.floor(mod / B).toString();
        mod = mod % B;
    }
    return ret + decimals;
};

const insert = function(index, str) {
    
    let front = str.slice(0, index);
    let back = str.slice(index);
    return front + '(' + back + ')';
}
