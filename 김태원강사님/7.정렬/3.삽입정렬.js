function solution(nums) {
  for (let i = 0; i < nums.length; i++) {
    let tmp = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > tmp) nums[j + 1] = nums[i];
    }
  }
}
