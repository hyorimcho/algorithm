function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + "";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt += 1;
    }
  }
}
console.log(solution("KKHSSSSSSSE"));

//답안
function solution(s) {
  let answer = "";
  let cnt = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      answer += s[i];
      if (cnt > 1) {
        answer += cnt;
      }
      cnt = 1;
    }
  }
  return answer;
}
