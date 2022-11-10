function solution(s) {
  let stack = [];
  for (let x of s) {
    if (s[i] === ")") {
      while(stack.pop() != '(')
    } else stack.push(x);
  }
  return stack;
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));