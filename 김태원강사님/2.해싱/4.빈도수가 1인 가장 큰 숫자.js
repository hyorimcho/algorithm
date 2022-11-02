function solution(nums) {
  let myMap = new Map();
  for (let x of nums) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }
  let maxNum = 0;
  for (let [key, val] of myMap) {
    if (val === 1) {
      if (key > max) {
        maxNum = key;
      }
    }
  }
  return maxNum === 0 ? -1 : maxNum;
}

function solution(nums) {
  let myMap = new Map();
  for (let x of nums) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }
  let maxNum = 0;
  for (let [key, val] of myMap) {
    if (val === 1) {
      if (key > maxNum) {
        maxNum === key;
      }
    }
    return maxNum === 0 ? -1 : maxNum;
  }
  console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7]));
  console.log(solution([3, 8, 3, 3, 5, 1, 1, 1, 7, 2, 2]));

  //배열 풀이 방법
  function solution(nums) {
    let ch = Array(1001).fill(0);
    for (let x of nums) {
      ch[x]++;
    }
    for (let i = 1000; i >= 0; i--) {
      if (ch[i] === 1) return i;
    }
    return -1;
  }
}
