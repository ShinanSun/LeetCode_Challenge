/**
 * @param {character[][]} grid
 * @return {number}
 */

function DFS (grid, row, col) {
    if ( row > grid.length -1 || col > grid[0].length -1 || row < 0 || col < 0 || grid[row][col] === '0') {
        return;
    }  
    grid[row][col] = '0';
    DFS (grid, row, col + 1);
    DFS (grid, row, col - 1); 
    DFS (grid, row -1, col);
    DFS (grid, row + 1, col);
    
} 

var numIslands = function(grid) {
    var counter = 0;
    for (var i = 0; i < grid.length; i++){
        for (var j = 0; j < grid[0].length; j++){
            if (grid[i][j] === '1') {
                counter ++;
                DFS(grid, i, j)
            }
        }
    }
    
    return counter;
};