/*
인덱스가 짝수 == 수
인덱스가 홀수 == 박
*/

function solution(n) {
  var answer = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) answer += '수';
    else answer += '박';
  }
  return answer;
}

function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += i % 2 == 0 ? '수' : '박';
  }
  return answer;
}
