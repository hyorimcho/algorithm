function solution(cost, k) {
  let answer = 0;
  let cnt = 0;
  let left = 0;
  for (let right = 0; right < cost.length; right++) {
    if (cost[right] === 0) cnt++;
    while (cnt > k) {
      if (cost[left] === 0) cnt--;
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
