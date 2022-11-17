function solution(nums, k) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  answer = sum;
  let left = 0;
  for (let right = k; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    answer = Math.max(answer, sum);
    left++;
  }
  return answer;
}
console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5));
