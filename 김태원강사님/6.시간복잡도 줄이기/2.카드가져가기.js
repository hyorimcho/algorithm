function solution(nums, k) {
  let answer = nums.reduce((a, b) => a + b, 0);
  let len = nums.length - k; //남은갯수 len만큼 창크기를 밀고 간다.
  let sum = 0;
  for (let i = 0; i < len; i++) sum += nums[i];
  minS = sum;
  let left = 0;
  for (let right = len; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    minS = Math.min(minS, sum);
    left++;
  }
  return answer - minS;
}
console.log(solution([2, 3, 7, 1, 2, 1, 5], 4));
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5));
