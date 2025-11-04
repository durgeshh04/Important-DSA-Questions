/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  // Better approach: TC: O(m * log(n))

  //   for (let i = 0; i < matrix.length; i++) {
  //     const row = matrix[i];
  //     if (target < row[0] || target > row[row.length - 1]) {
  //       continue;
  //     }
  //     let left = 0;
  //     let right = row.length - 1;
  //     while (left <= right) {
  //       const mid = Math.floor((left + right) / 2);
  //       if (row[mid] === target) {
  //         return true;
  //       } else if (row[mid] < target) {
  //         left = mid + 1;
  //       } else {
  //         right = mid - 1;
  //       }
  //     }
  //   }
  //   return false;

  //Optimise solution: TC: O(log(M * N))
  let m: number = matrix.length;
  let n: number = matrix[0].length;

  let left: number = 0;
  let right: number = m * n - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let row: number = Math.floor(mid / n);
    let col: number = Math.floor(mid % n);

    let midVal: number = matrix[row][col];
    if (midVal == target) {
      return true;
    }

    if (midVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
// @lc code=end
