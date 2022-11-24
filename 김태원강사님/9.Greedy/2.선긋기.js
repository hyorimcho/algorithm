function solution(nums) {
  let answer = 0;
  nums.sort((a, b) => a[0] - b[0]);
  let s = nums[0][0];
  let e = nums[0][1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i][0] <= e && nums[i][1] > e) {
      e = nums[i][1];
    } else if (nums[i][0] > e) {
      answer += e - s;
      s = nums[i][0];
      e = nums[i][1];
    }
  }
  // 안하면 마지막 선을 실행하지 않게 된다.
  answer += e - s;
  return answer;
}
