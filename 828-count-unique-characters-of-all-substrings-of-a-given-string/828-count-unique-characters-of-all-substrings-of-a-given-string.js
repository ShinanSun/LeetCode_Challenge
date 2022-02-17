/**
 * @param {string} s
 //find all substring of S and invoke each substring with count;
 return sum;
 * @return {number}
 */

var uniqueLetterString = function(s) {
    const n = s.length;
    if (!n) return 0;
    
    let alphabet1 = new Array(26).fill(-1); // each char a -z initial position at -1;
    const leftBoundary = new Array(n).fill(-1);
    const rightBoundary = new Array(n).fill(n);
    
    const AcharCode = 'A'.charCodeAt();
    //find the boundary for each char in s;
    for (let i = 0; i < n; i++) {
        let currChar = s[i];
        let currCharIndex = currChar.charCodeAt() - AcharCode;
        if (alphabet1[currCharIndex] !== -1) {
            //now memorize the left boundary of i;
            leftBoundary[i] = alphabet1[currCharIndex];
        }
        
        alphabet1[currCharIndex] = i;
    }
    
    let alphabet2 = new Array(26).fill(-1);
    for (let j = n - 1; j >= 0; j--) {
        let currChar = s[j];
        let currCharIndex = currChar.charCodeAt() - AcharCode;
       // console.log('what is currIndex', currCharIndex)
        if (alphabet2[currCharIndex] !== -1) {
            rightBoundary[j] = alphabet2[currCharIndex];
        }
        
        alphabet2[currCharIndex] = j;
    }
    
    //console.log(leftBoundary, rightBoundary);
    let res = 0;
    for (let i = 0; i < n; i++) {
        let left = i - leftBoundary[i];
        let right = rightBoundary[i] - i;
        res += left * right;
    }
    
    
    return res;
};