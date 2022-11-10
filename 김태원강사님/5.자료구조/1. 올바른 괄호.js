function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (stack.length === 0) return "NO";
      stack.pop();
    } else stack.push(s[i]);
  }
  if (stack.length > 0) return "NO";
  return answer;
}
console.log(solution("(())()"));

function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (stack.length === 0) return "NO";
      stack.pop();
    } else stack.push(s[i]);
  }
  stack.length > 0 ? "NO" : "YES";
  return answer;
}
console.log(solution("(())()"));
