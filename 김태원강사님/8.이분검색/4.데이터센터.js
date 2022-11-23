function solution(board) {
  let answer = 0;
  let n = board.length;
  let left = 0;
  let right = 0;
  let sum = 0;

  //e는 행
  board.forEach((e) => {
    right = Math.max(right, Math.max(...e));
    //b는 e 의 원소들
    sum += e.reduce((a, b) => a + b);
  });

  function Count(mid) {
    let cnt = 0;
    board.forEach((e) => {
      for (let i = 0; i < e.length; i++) {
        if (e[i] >= mid) cnt += mid;
        else cnt += e[i];
      }
    });
    return cnt;
  }

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       if (board[i][j] >= m) cnt += m;
  //       else cnt += board[i][j];
  //     }
  //   }
  //   return cnt;
  // }

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (Count(mid) >= sum / 2) {
      answer = mid;
      right = mid - 1;
    } else left = mid + 1;
  }
  return answer;
}

let arr = [
  [2, 3, 1, 5, 6],
  [3, 0, 7, 4, 3],
  [8, 5, 7, 5, 6],
  [9, 6, 1, 5, 5],
  [5, 5, 8, 5, 1],
];
console.log(solution(arr));
