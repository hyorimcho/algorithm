function solution(s) {
  var answer = '';
  let len = s.length;

  if(s.length%2==0) answer = s[len/2 - 1] + s[len/2];
  if(s.length%2==1) answer = s[len/2 - 0.5];

  return answer;
}