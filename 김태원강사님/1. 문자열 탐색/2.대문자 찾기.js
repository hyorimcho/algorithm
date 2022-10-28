//내 풀이
function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (65 <= s[i].charCodeAt() && s[i].charCodeAt() <= 90) answer++;
  }
  return answer;
}
console.log(solution("“KoreaTimeGood"));

//2
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer++;
  }
  return answer;
}
console.log(solution("“KoreaTimeGood"));

//3 공백 제거 필요
function solution(s) {
  let answer = 0;
  s = s.split(" ").join("");
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}
console.log(solution("IT IS TIME TO GO"));
