/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴
swap  함수? 
반복문을 돌면서 끝자리부터 첫번째자리로 서로서로 바꾼다.
*/

function solution(n) {
  let answer = [];
  let arr = (n + '').split().reverse();
  for (let i = arr.length - 1; i > arr.length; i--) {
    answer.push(arr[i]);
  }
  return answer;
}

function solution(n) {
  let answer = [];
  let arr = (n + '').split('');

  for (let i = arr.length - 1; i == 0; i--) {
    answer.push(Number.arr[i]);
  }
  return answer;
}

function solution(n) {
  var arr = n.toString().split('');
  var answer = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    answer.push(Number(arr[i]));
  }
  return answer;
}
