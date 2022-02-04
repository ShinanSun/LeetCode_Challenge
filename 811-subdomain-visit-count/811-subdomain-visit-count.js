/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map();
    for (let domain of cpdomains) {
        let cpinfo = domain.split(' ');
        let baseCount = parseInt(cpinfo[0]);
        let frags = cpinfo[1].split('.');
        let str = ''
        for (let j = frags.length - 1; j >= 0; j--) {
            //console.log(frags[j])
            if (j === frags.length - 1) {
                str = frags[j];
            } else {
                str = frags[j] + '.' + str;
            }
            
            if (map.has(str)) {
                map.set(str, map.get(str) + baseCount);
            } else {
                map.set(str, baseCount)
            }
        }
    }
    
    let result = [];
    for (let [key, val] of map) {
        result.push(val + ' ' + key);
    }
    
    return result;
};