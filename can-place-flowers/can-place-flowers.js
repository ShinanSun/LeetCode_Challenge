/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
        return n <= 1;
    }
    var count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (i === 0 && flowerbed[0] === 0 && flowerbed[1] === 0){
            flowerbed[0] = 1;
            count ++
        } else if (i === flowerbed.length -1 && flowerbed[i] === 0 && flowerbed[i-1] === 0) {
        
            count ++
        } else if (flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0 ) {
            flowerbed[i] = 1;
            count ++
        }
    }
    
    if (count >= n) {
        return true
    } else {
        return false
    }
};