function solution(s, e) {
  let ch = Array(10001).fill(0); //체크배열
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let v = queue.shift();
      if (v === e) return L;
      for (let nv of [v - 1, v + 1, v + 5]) {
        if (nv > 0 && nv <= 10000 && ch[nv] === 0) {
          ch[nv] = 1;
          queue.push(nv);
        }
      }
    }
    L++;
  }
}

console.log(solution(5, 14));

function solution(s, e) {
  let ch = Array(10001).fill(0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
}

console.log(solution(5, 14));
