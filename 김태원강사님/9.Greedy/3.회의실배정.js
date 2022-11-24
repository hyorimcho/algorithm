function solution(times) {
  let answer = 0;
  times.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let endtime = 0;
  for (let x of times) {
    if (x[0] >= endtime) {
      answer++;
      endtime = x[1];
    }
  }
  return answer;
}

function solution(times) {
  times.sort((a, b) => a[1] - b[1]);
  console.log(times);
  let answer = 0;
  let et = 0;

  for (let x of times) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}
console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
