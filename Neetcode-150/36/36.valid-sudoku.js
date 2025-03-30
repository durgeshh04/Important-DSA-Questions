/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rowSet = new Array(9).fill(null).map(() => new Set());
    let colSet = new Array(9).fill(null).map(() => new Set());
    let boxSet = new Array(9).fill(null).map(() => new Set());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let num = board[i][j];
            if (num == '.') {
                continue;
            }

            let boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rowSet[i].has(num) || colSet[j].has(num) || boxSet[boxIdx].has(num)) {
                return false;
            }

            rowSet[i].add(num);
            colSet[j].add(num);
            boxSet[boxIdx].add(num);

        }
    }

    return true;

};
// @lc code=end

