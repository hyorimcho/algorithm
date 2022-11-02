function solution(s) {
  let cnt = {};
  let odd = 0;
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  let keys = Object.keys(cnt);
  for (let x of keys) {
    if (cnt[x] % 2 === 1) odd++;
  }
  return odd <= 1 ? true : false;
}

console.log(solution("abbac"));
console.log(solution("abcbbbe"));
console.log(solution("ccccc"));
