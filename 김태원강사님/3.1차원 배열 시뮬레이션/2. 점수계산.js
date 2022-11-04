function solution(nums) {
  let answer = 0;
  let cnt = 0;
  for (let x of nums) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}
let nums = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(nums));

//1을 만나면 score 을 1점 증가시킨다. answer에 누적
function solution(arr) {
  let answer = 0;
  let score = 0;

  arr.forEach((item) => {
    score = item === 1 ? score + 1 : 0;
    answer += score;
  });

  return answer;
}

function solution(nums) {
  let answer = 0;
  let cnt = 0;
  nums.forEach((num) => {
    if (num == 1) {
      cnt += 1;
      answer += cnt;
    } else {
      cnt = 0;
    }
  });
  return answer;
}

function solution(nums) {
  let score = 0;
  let answer = 0;
  nums.forEach((element) => {
    if (element === 1) {
      score++;
      answer += score;
    } else score = 0;
  });
  return answer;
}
