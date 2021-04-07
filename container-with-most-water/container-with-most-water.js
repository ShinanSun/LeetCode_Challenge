/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let p1 = 0, p2 = height.length -1;
    let max = 0;
    let width;
    let hei;
    while (p1 < p2) {
        width = p2 - p1;
        hei = Math.min(height[p1], height[p2]);
        max = Math.max(max, width * hei)
        
        if (height[p1] < height[p2]) {
            p1++
        } else {
            p2--
        }
    }
    
    return max;
};