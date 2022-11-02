//해싱하면 순서대로 key 가 생성된다.

function solution(s) {
  let sH = new Map();
  for (let x of s) {
    sH.set(x, sH.get(x) + 1 || 0 + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (sH.get(s[i]) === 1) return i + 1;
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
