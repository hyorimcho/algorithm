function solution(nums) {
  let answer = "yes";
  let n = nums.length;
  let i = 0;
  //증가수열
  //숫자와 undefined 와 비교하면 false.

  while (i + 1 < n && nums[i] < nums[i + 1]) ++i;
  //i===0 인 경우는 증가수열이 아니라는 뜻
  //i===n-1인 경우는 마지막 숫자라는 뜻. 계속 증가했다고 생각할 수 있다.
  if (i === 0 || i === n - 1) answer = "no";
  //감소수열
  while (i + 1 < n && nums[i] > nums[i + 1]) ++i;
  // n-1 까지 못오고 멈춰버렸을때
  if (i !== n - 1) answer = "no";
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 3, 1]));
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
console.log(solution([1, 2, 3, 4, 5]));

// function solution(nums) {
//   let i = 0;
//   let leng = nums.length;

//   while (nums[i] < nums[i + 1]) i++;
//   if (i === 0 || i === leng - 1) {
//     return "NO";
//   }

//   while (nums[i] > nums[i + 1]) i++;
//   if (i !== leng - 1) {
//     return "NO";
//   }

//   return "YES";
// }

// function solution(nums) {
//   let answer = "YES";
//   for (let i = 0; i < nums.length; i += 1) {
//     while (nums[i] < nums[i + 1]) i += 1;
//     if (i === 0) {
//       return (answer = "NO");
//     } else if (i === nums.length - 1) {
//       return (answer = "NO");
//     }
//     while (nums[i] > nums[i + 1]) i += 1;
//     if (i !== nums.length - 1) {
//       return (answer = "NO");
//     }
//   }
//   return answer;
// }
