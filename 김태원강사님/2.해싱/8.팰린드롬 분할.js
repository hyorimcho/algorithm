// 1글자만 있는 문자는 k개 까지 가능하다.
function solution(s, k) {
  let cnt = {};
  let odd = 0;
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  let keys = Object.keys(cnt);
  for (let x of keys) {
    if (cnt[x] % 2 === 1) odd++;
  }
  return odd <= k ? true : false;
}

console.log(solution("aabbccee", 2));
console.log(solution("abcabcabcca", 3));
console.log(solution("abcabcabc", 2));
