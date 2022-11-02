function solution(s) {
  let myMap = new Map();
  for (x of s) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
    if (myMap.get(x) >= 2) return x;
  }

  return -1;
}

//객체 풀이방법
function solution(s) {
  let myMap = {};
  for (let x of s) {
    myMap[x] = (myMap[x] || 0) + 1;
    if (myMap[x] >= 2) return x;
  }
  return -1;
}
