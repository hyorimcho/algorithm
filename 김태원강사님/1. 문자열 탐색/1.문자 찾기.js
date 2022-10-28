function solution(s, c) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    //if(s[i]0.include(c)) answer++
    if (s[i] === c) answer += 1;
  }
  return answer;
}
console.log(solution("COUMPUTERPROGRAMMING", "R"));

function solution(s, c) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      answer++;
    }
  }
  return answer;
}
console.log(solution("COMPUTERPROGRAMMING", "R"));

function solution(s, c) {
  let answer = 0;
  for (let x of s) {
    if (x === c) answer++;
  }
  return answer;
}
console.log(solution("COUMPUTERPROGRAMMING", "R"));
