function solution(s) {
  let sH = {};
  let odd = 0;
  for (let x of s) {
    sH[x] = (sH[x] || 0) + 1;
  }
  for (let key of Object.keys(sH)) {
    if (sH[key] % 2 == 1) odd++;
  }
  return odd > 0 ? s.length - odd + 1 : s.length;
}
console.log(solution("abcbbbccaa"));
console.log(solution("abcde"));
console.log(solution("ccc"));
