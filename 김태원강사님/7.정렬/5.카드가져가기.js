function solution(nums, n) {
  let answer = 0;
  nums.sort(a, (b) => b - a);
  let diff = [];
  for (let i = 1; i < nums.length; i += 2) {
    answer += nums[i];
    diff.push(nums[i - 1] - nums[i]);
  }
  diff.sort(a, (b) => b - a);
  for (let i = 0; i < n; i++) answer += diff[i];
  return answer;
}

//nums를 내림차순 정렬
//diff에 라운드 별의 차이를 저장해놓는다.
//diff를 정렬한다. [0,1,2,2,0] > [2,2,1,0,0]
//우선권을 두번 사용하면, diff 앞의2번을 점수에 더한다.
//왜냐? 각 라운드별 격차가 클 때 우선권을 사용하는 것이 좋기 때문이다.

console.log(solution([7, 8, 5, 9, 3, 1, 3, 1, 1, 9], 2));
