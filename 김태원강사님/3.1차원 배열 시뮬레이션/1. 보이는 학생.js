function solution(nums) {
  let answer = 1;
  for (let i = 1; i < nums.length; i++) {
    let flag = true; //위치에 주의할 것
    for (let j = 0; j < i; j++) {
      if (nums[j] >= nums[i]) {
        flag = false;
        break;
      }
    }
    if (flag === true) answer++;
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([5, 4, 3, 2, 1]));
