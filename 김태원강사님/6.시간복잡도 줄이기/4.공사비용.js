function solution(cost, m) {
  let sum = 0;
  let answer = 0;
  let left = 0;
  for (let right = 0; right < cost.length; right++) {
    sum += cost[right];
    while (sum > m) {
      sum -= cost[left];
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

console.log(solution([0, 150, 100, 0, 150, 0, 70, 140], 350));
