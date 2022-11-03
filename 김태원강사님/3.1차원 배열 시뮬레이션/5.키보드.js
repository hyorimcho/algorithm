function solution(s, k) {
  s = "teacher";
  let answer = 0;
  let set = new Set();
  for (let x of s) {
    set.add(x);
  }
  answer = set.size;
  for (let i = 0; i < set.length; i++) {
    if (65 <= set.charCodeAt([i]) && set.charCodeAt([i]) <= 90) answer++;
  }
  if (set.size !== k) return "false";
  return "true";
}

console.log(solution("teacher", 6));
console.log(solution("Teacher", 6));
console.log(solution("TeacHer", 7));
