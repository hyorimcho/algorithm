//1
function solution(s) {
  s = s.toLowerCase();
  let revStr = s.split("").reverse().join("");
  if (revStr === s) return "YES";
  else return "NO";
}
console.log(solution("Moon"));

//2 왜 안될까요
// function solution(s) {
//   s = s.toLowerCase();
//   for (let i = 0; i < s.length / 2 + 1; i++) {
//     if (s[i] !== s[s.length - i - 1]) return "NO";
//   }
//   return "YES";
// }

function isPalindrome(input) {
  input = input.toUpperCase();
  let l = 0;
  let r = input.length - 1;

  while (l < r) {
    if (input[l] !== input[r]) {
      console.log(input[l], input[r]);
      return false;
    }
    l++;
    r--;
  }
  return true;
}

function solution(input) {
  if (isPalindrome(input)) {
    return "YES";
  } else {
    return "NO";
  }
}
let input = "goog";
const output = solution(input);
console.log(output);
