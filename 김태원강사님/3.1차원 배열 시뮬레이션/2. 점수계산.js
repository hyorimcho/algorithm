function solution(nums) {
  let answer = 0;
  let cnt = 0;
  for (let x of nums) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}
let nums = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(nums));
