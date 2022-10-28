// function solution(s) {
//   let answer = 0;
//   for (let i = 0; i < s.length; i++) {
//     s = s.charCodeAt();
//     if (65 <= s[i] && s[i] <= 90) s[i] = s.toUpperCase();
//   }else{
//     s[i] = s.toLowerCase();
//   }

//   return answer;
// }
// console.log();

function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }
  return answer;
}

console.log(solution("StuDY"));
