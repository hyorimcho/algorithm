function count(nums, mid) {
  let cnt = 1,
    ep = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - ep >= mid) {
      cnt++;
      ep = nums[i];
    }
  }
  return cnt;
}
function solution(nums, c) {
  let answer;
  nums.sort((a, b) => a - b);
  //제일 왼쪽에 한마리 배치
  let left = 1;
  let right = Math.max(...nums);
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(nums, mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }
  return answer;
}

console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));
console.log(solution([5, 9, 10, 12, 14, 15], 3));
