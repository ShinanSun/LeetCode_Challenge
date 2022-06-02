/**
 * @param {character[][]} grid
 * @return {number}
 */
const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var getFood = function(grid) {
    let start, food;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '*') start = [i, j];
        }
    }
    let queue = [start];
    grid[start[0]][start[1]] = 'X'
    let steps = 0;
    while (queue.length) {
        let size = queue.length; 
        for (let i = 0; i < size; i++) {
            let [row, col] = queue.shift();
           
            // if (grid[row][col] === '#') {
            //     console.log(grid)
            //     return steps;
            // }
            // grid[row][col] = 'X';
            
            for (let [r, c] of directions) {
                let x = r + row;
                let y = c + col;
                if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] !== 'X') {
                    if (grid[x][y] === '#') return steps+1;
                    grid[x][y] = 'X';
                    queue.push([x, y])
                }
            }
        }
        steps++;
    }
    
    return -1;
};