function solution(nums, h) {
  let answer;

  function count(k) {
    let cnt = 0;
    for (let x of nums) {
      cnt += Math.ceil(x / k); // 3.5시간이면 4시간이라 올림 해줘야지.
    }
    return cnt;
  }

  let left = 1;
  let right = Math.max(...nums);
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(mid) <= h) {
      // 시간 안에 먹음
      answer = mid;
      right = mid - 1; // 더 작은 시간을 향해 가야하기 때문
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
