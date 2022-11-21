function prime(k) {
  for (let i = 2; i * i <= k; i++) {
    if (k % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let key = nums[i] + nums[j] + nums[k];
        if (prime(key)) answer++;
      }
    }
  }
  return answer;
}
