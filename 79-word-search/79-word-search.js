/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const rows = board.length;
    const cols = board[0].length;
    
    const dfs = function(pos, row, col, path, visited) {
  
        if (path.length === word.length) return true;
        
        for (let dir of directions) {
            let x = dir[0] + row;
            let y = dir[1] + col;
        
            if (x >= 0 && y >= 0 && x < rows && y < cols && !visited[x][y] && board[x][y] === word[pos + 1]) {
                visited[x][y] = true;
                path.push(board[x][y]);
                if (dfs(pos + 1, x, y, path, visited)) return true;
                path.pop();
                visited[x][y] = false;
            }
            
        }
        
        return false;
    }
    

    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(board[i][j] === word[0]) {
                let visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
                visited[i][j] = true;
                if (dfs(0, i, j, [word[0]], visited)) return true;
            }
        }
    }
    
    return false;
};