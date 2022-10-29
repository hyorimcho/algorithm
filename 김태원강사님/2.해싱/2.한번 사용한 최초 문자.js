//해싱하면 순서대로 key 가 생성된다.

function solution(s) {
  let answer = "";
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (sH.keys === 1) return s[i];
  }
  return -1;
}
//1번 풀이
function solution(s) {
  let answer = -1;
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  for (let i in s) {
    if (map.get(s[i]) === 1) {
      return Number(i) + 1;
    }
  }
  return answer;
}
console.log(solution("aabb"));

//2번 풀이
function findOneFreqChar(myMap) {
  for (x of myMap.keys()) {
    if (1 === myMap.get(x)) {
      return x;
    }
  }
}

function solution(input) {
  let myMap = new Map();

  for (x of input) {
    if (myMap.has(x)) {
      myMap.set(x, myMap.get(x) + 1);
    } else {
      myMap.set(x, 1);
    }
  }
  let ch = findOneFreqChar(myMap);

  return ch ? input.indexOf(ch) + 1 : -1;
}
let input = "statistics";
let output = solution(input);
console.log(output);
