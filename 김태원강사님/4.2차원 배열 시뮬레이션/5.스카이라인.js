function solution(board) {
  let answer = 0;
  let n = board.length;
  let row = [];
  let col = [];
  for (let i = 0; i < n; i++) {
    let maxRow = 0;
    let maxCol = 0;
    for (let j = 0; j < n; j++) {
      if (maxRow < board[i][j]) maxRow = board[i][j];
      if (maxCol < board[j][i]) maxCol = board[j][i];
    }
    row.push(maxRow);
    col.push(maxCol);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      answer += Math.min(row[i], col[j]) - board[i][j];
    }
  }
  return answer;
}

console.log(
  solution([
    [2, 5, 7, 3],
    [6, 8, 9, 7],
    [3, 2, 4, 5],
    [7, 2, 5, 8],
  ])
);
