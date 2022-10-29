function solution(nums) {
  let myMap = new Map();
  for (x of nums) {
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

function solution(nums) {}
