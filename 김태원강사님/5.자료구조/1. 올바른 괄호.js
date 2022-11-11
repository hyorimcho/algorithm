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

function solution(s) {
  let stack = [];
  let answer = "YES";
  for (x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

/*
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
*/
