//최대길이 바이토닉 수와 같음.
//봉우리를 하나를 하는, 바이토닉수는 여러개일 수 있다.

function solution(nums) {
  let peaks = [];
  let answer = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peaks.push(i);
    }
  }

  for (let p of peaks) {
    let len = 1;
    let left = p;
    let right = p;
    while (nums[left - 1] < nums[left]) {
      len++;
      left--;
    }
    while (nums[right] > nums[right + 1]) {
      len++;
      right++;
    }
    answer.push(len);
  }
  return Math.max(...answer);
}
