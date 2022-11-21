function solution(nums) {
  let answer = 0;
  let myMap = new Map();
  let n = nums.length / 2;
  for (x of nums) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }
  if (myMap.size > n) answer = n;
  else {
    answer = myMap.size;
  }
  return answer;
}
