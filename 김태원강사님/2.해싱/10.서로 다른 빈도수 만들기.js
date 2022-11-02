function solution(s) {
  let cnt = {};
  let set = new Set();
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  let del = 0;
  for (let x of Object.keys(cnt)) {
    while (set.has(cnt[x])) {
      del++;
      cnt[x]--;
    }
    if (cnt[x] === 0) continue;
    set.add(cnt[x]);
  }
  return del;
}
console.log(solution("aaabbbcc"));
console.log(solution("aebbbbc"));
