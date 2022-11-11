function solution(n, k) {
  queue = [];
  let answer = 0;
  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }
  while (queue.length) {
    // 비어있으면 while문 멈춤
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) answer = queue.shift(); // return queue[0]
    // 한명 남은 사람을 answer 에 넣어준다 그리고 legnth 는 0이되어 while문 멈춤
  }
  return answer;
}
console.log(solution(10, 4));

function solution(n, k) {
  queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(i + 1); //1부터n까지
  }
  for (let i = 0; i < n - 1; i++) {
    let tmp = k;
    while (tmp !== 0) {
      queue.push(queue.shift());
      tmp--;
    }
    queue.pop();
  }
  return queue[0];
}
console.log(solution(10, 4));
