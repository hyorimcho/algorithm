/*
자연수 n 이 주어지면 각 자릿수의 합을 구해서 리턴하기. 

1) 자연수를 문자열로 변환한다.123 > "123"
2) 문자열을 하나씩 뗀다. "1" "2" "3"
3) 돌아가면서 한 자리씩 더한다.
*/

function solution(n) {
  var answer = 0;
  let str = n + '';
  for (let i = 0; i < str.length; i++) {
    answer += Number(str[i]);
  }
  return answer;
}
