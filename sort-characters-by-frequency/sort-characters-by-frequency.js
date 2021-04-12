/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var obj = s.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) +1;
        return acc;
    }, {});
    //console.log('obj', obj)
    
    var arr = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    
    var result = '';
    
    for (var i = 0; i < arr.length; i++){
        result += arr[i].repeat(obj[arr[i]])
    }
    return result;
};