/*
정수 n의 약수를 구하는 방법

for문을 돌면서 나머지가 0인 것들만 더한다.
*/

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) answer += i;
  }
  return answer;
}
