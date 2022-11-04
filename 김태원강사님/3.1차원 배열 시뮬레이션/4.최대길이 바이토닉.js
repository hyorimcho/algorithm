function solution(nums) {
  let answer = 0;
  let peak = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peak.push(i); //봉우리 지점을 찾아 배열에 넣어준다.
    }
    for (let p of peak) {
      let left = p;
      let right = p;
      let len = 1; //바이토닉의 길이 (봉우리 +1) for문 안에서 초기화해야함
      while (nums[left - 1] < nums[left]) {
        answer++;
        left--;
      }
      while (nums[right] > nums[right + 1]) {
        answer++;
        right++;
      }
    }
    answer.push(len);
  }
  return Math.max(...answer);
}

//index out of range 문제 :: 자바스크립트에서는 undefined 와 비교하여 자동으로 false를 반환한다.

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

// 바이타닉 수열 만큼 봉우리가 있다. ( 커졌다 작아지는)
// 1. 봉우리를 찾자
// 2. peak = [] 내 왼쪽,오른쪽 비교하여 내가 제일 크다면 인덱스 번호를 push 하기
// ( 인덱스 1번부터 비교하면 된다.)
// 3. 봉우리 지점에서 왼쪽으로 갈 때는 감소수열, cnt도 함께 세어야해
// 4. 봉우리 지점에서 오른쪽으로 갈 때는 증가수열. cnt도 함께 세어야해
// 갯수를 모두 더하면 바이토닉 수열이 완성된다.
// 봉우리 갯수를 안셀 수 있으니 cnt 를 1로 초기화 하는 것이 편리하다.

// left = p
// right = p
// 둘다 peak 로 초기화하고 왼.오른쪽으로 움직이기
// 값을 answer 에 넣는다.
