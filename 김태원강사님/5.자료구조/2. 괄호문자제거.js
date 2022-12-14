function solution(s) {
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  return stack.join("");
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

function solution(s) {
  let answer = "";
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push(s);
    else if (x === ")") stack.pop();
    else {
      if (stack.length === 0) answer += x;
    }
  }
  return answer;
}
console.log(solution("(a(B)c)(c)e(e)"));
