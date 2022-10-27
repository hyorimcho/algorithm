/* 
1)
n을 차례로 돌면서 가장 큰 숫자부터 배열에 push 하여
join을 사용하여 문자열로 변환한다.
*/

/*
2)
n을 배열로 만든 후,
(정수 > 문자열 > 배열의 차례를 거쳐야한다.)
sort 로 정렬을 하고 reverse로 거꾸로 정렬
(배열 > 문자열(join) > 정수(Number)의 차례를 거쳐 답안 제출)
*/

function solution(n) {
  let arr = [];
  let answer = 0;
  arr = (n + '').split('');
  answer = Number(arr.sort().reverse().join(''));
  return answer;
}
