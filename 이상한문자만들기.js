/*
단어 공백을 기준으로 하는 것에서 막혔다.

try hello world
에서, 띄어쓰기를 구분자로 나누어 준다.
s.split(' '); 하면, 
str[0] = try
str[1] = hello
str[2] = world
따라서 for 문을 돌면서 짝수는 대문자, 홀수는 소문자로 바꾸어준다.
이후 join을 통하여 문자열로 다시 붙여준다.
*/

function solution(s) {
  var answer = [];
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let word = '';
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 == 0) word += arr[i][j].toUpperCase();
      else word += arr[i][j].toLowerCase();
    }
    answer.push(word);
  }
  return String(answer.join(' '));
}
