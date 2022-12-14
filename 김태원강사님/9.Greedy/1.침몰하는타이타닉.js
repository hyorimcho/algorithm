function solution(nums, m) {
  let answer = 0;
  let lt = 0,
    rt = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (lt <= rt) {
    if (nums[lt] + nums[rt] <= m) {
      answer++;
      lt++;
      rt--;
    } else {
      answer++;
      rt--;
    }
  }
  return answer;
}

console.log(solution([90, 50, 70, 100, 60], 140));
console.log(solution([86, 95, 107, 67, 38, 49, 116, 22, 78, 53], 150));
console.log(
  solution(
    [
      68, 72, 30, 105, 55, 115, 36, 67, 119, 111, 95, 24, 25, 80, 55, 85, 75,
      83, 21, 81,
    ],
    120
  )
);
