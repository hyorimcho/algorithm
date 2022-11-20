function solution(arr) {
  let pair = [];
  let answer = [];
  arr.forEach((e) => {
    // 나중에 e 를 push 해야해서 tmp에 복사 해 준다.
    let temp = e;
    let cnt = 0;
    while (temp > 0) {
      cnt += temp % 2; //1의 갯수이므로 나머지를 더해준다.
      temp = parseInt(temp / 2); //몫이 0일때까지 돌려줘야하니까
    }
    pair.push([e, cnt]); //pair라는 배열에 cnt, e 를 넣어준다.
  });
  pair.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  pair.forEach((v) => answer.push(v[0]));
  return answer;
}
console.log(solution([5, 6, 7, 8, 9]));
console.log(solution([5, 4, 3, 2, 1]));
