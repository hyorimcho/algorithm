function solution(n) {
  let answer = 0,
    tmp = [];
  function DFS(n) {
    if (n == 0) return;
    else {
      DFS(parseInt(n / 2));
      tmp.push(n % 2);
    }
  }
  DFS(n);
  for (let i = 0; i < tmp.length; i++) {
    //answer = tmp.join('');
    answer = answer * 10 + tmp[i];
  }
  return answer;
}
console.log(solution(11));
