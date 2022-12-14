function solution(n, m) {
  let answer = [];
  let tmp = [];
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp.push(i);
        DFS(L + 1);
        tmp.pop();
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
