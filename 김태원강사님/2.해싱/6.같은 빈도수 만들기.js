function solution(s) {
  let answer = [];
  let map = new Map();
  for (let i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  //value중 가장 큰 값을 반환하여 max 변수에 넣어준다.
  let max = Math.max(...map.values());
  for (let x of "abc") {
    let F = max - (map.get(x) === undefined) ? 0 : map.get(x);
    answer.push(max - F);
  }
  return answer;
}
console.log(solution("aabb"));

// 2번
function solution(s) {
  let answer = -1;
  let map = new Map();
  for (let i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  let max = Math.max(...map.values());
  let l1 = [max, max, max];
  let l2 = ["a", "b", "c"];
  for (let i in l1) {
    l1[i] = l1[i] - (map.get(l2[i]) || 0);
  }
  return l1;
}
console.log(solution("aabb"));
