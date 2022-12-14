function solution(board, k) {
  let answer = [];
  let n = board.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let d = 1,
    count = 0;
  let x = 0,
    y = 0,
    nx,
    ny;
  while (count < k) {
    count++;
    [nx, ny] = [x + dx[d], y + dy[d]];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] == 1) {
      d = (d + 1) % 4; // 0,1,2,3 만 계속 돌아야해서
      continue; //1을 증가시키지 않고 1초 보내야해서
    }
    [x, y] = [nx, ny];
  }
  answer.push(x);
  answer.push(y);
  return answer;
}
