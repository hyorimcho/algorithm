function solution(nums, m) {
  let answer = [];
  let check = Array(n + 1).fill(0);
  let tmp = [];

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp.push(nums[i]);
          DFS(L + 1);
          check[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}
