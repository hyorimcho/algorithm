/*
1)주어진 문자열 s가 소문자인지 대문자인지 나눈다.
2)대문자일떄, 아스키코드값 s+n>122일 경우 -26 아니면 그냥 리턴
3)소문자일때, 아스키코드값 s+n>90일 경우 -26 아니면 그냥 리턴
*/
function solution(s, n) {
  var answer = '';
  for (let i = 0; i < n.length; i++) {
    if (s.charAt(i) + n > 122) re;
  }
  return answer;
}

function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let sASCII = s.charCodeAt(i);
    if (sASCII >= 65 && sASCII <= 90) {
      sASCII += n;
      if (sASCII > 90) {
        sASCII -= 26;
      }
    } else if (sASCII >= 97 && sASCII <= 122) {
      sASCII += n;
      if (sASCII > 122) {
        sASCII -= 26;
      }
    }
    sString = String.fromCharCode(sASCII);
    answer += sString;
  }
  return answer;
}
