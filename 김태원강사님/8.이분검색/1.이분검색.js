function solution(nums, m) {
  let answer;
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1; //인덱스 번호
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] === m) {
      answer = mid + 1;
      break;
    } else if (nums[mid] > m) right = mid - 1;
    else left = mid + 1;
  }
  return answer;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));

// sort 는 시간복잡도가 nlogn
// 자료가 만약에 1000개이면, 정렬은 1,000x10 = 10,000

// 이진탐색을하면 logn만에 찾아낼 수 있다.

// left / right 로 인덱스 번호 설정
// m = parseInt((left + right) / 2)
// 내가 찾고자 하는 타겟값 32인가?
// target 보다 크다? 자료는 left 와 mid 사이에 있음.
// target 보다 작다? mid 부터 right 사이에 있음.

// right = mid - 1 로 설정하여
// 절반을 날려버린다.
