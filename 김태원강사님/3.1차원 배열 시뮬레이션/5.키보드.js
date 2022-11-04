function solution(s, k) {
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

function solution(s, n) {
  let upper = 0;
  const set = new Set(s.toLowerCase());
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) upper = 1;
  }
  return set.size + upper <= n ? true : false;
}

console.log(solution("teacher", 6)); // true
console.log(solution("Teacher", 6)); // false
console.log(solution("TeacHer", 7)); // true
console.log(solution("LifeisGood", 8)); // false
console.log(solution("Gabg", 4)); // true
