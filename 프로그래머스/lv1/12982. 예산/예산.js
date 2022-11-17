function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b);
  for (x of d) {
    sum += x;
    if (sum > budget) break;
    else answer++;
  }
  return answer;
}
