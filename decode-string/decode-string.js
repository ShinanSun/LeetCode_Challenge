/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    var stack = []
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            //poping elements off until meet [;
            var decodedString = '';
            var popped = stack.pop() //c
            while (popped !== '[') {
                decodedString += popped; //cb
                popped = stack.pop() //[
            }
            
           
            
            //continue poping until it's not an number;
            var k = stack.pop() // "0"
           
            while (Number(stack[stack.length -1]) >= 0 ) {
                k = stack.pop() + k //'001'
            }
             
          
            k = Number(k) //22
            
            //now we want to push decodedString into Stack k times
            while (k > 0) {
                for (var j = decodedString.length -1; j >=0; j--) {
                    stack.push(decodedString[j])
                };
                k--;
            }
            
            
            //now stack is 3[abcbc,
        } else {
            stack.push(s[i])
        }
    }
    
    
    
    return stack.join('')
};