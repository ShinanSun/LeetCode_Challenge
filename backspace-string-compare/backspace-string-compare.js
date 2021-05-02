/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function backSpaceString(str){
    var stack = [];
    for (var i = 0; i < str.length; i++){
        var letter = str[i];
        if (letter !== '#'){
            stack.push(letter)
        } else {
            stack.pop()
        }
    }
    return stack.toString();
}
var backspaceCompare = function(s, t) {
    s = backSpaceString(s);
    t = backSpaceString(t);
    if (s === t) {
        return true
    } else {
        return false;
    }
};