function is_palindrome(s, left, right) {
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}

function solution(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      console.log(left, right);
      left++;
      right--;
    } else {
      if (
        //둘 중 하나라도 참이면 참 반환
        !is_palindrome(s, left + 1, right) &&
        !is_palindrome(s, left, right - 1)
      )
        return "NO";
    }
  }
  return "YES";
}

console.log(solution("abcacbakcba"));

// function solution6 (s) {
//   let answer = ''
//   let sArr = s.split('')

//   if(s.split('').reverse().join('') === s){
//     answer = "YES"
//   }else{
//     for( let i = 0; i < sArr.length; i++){
//       sArr.splice(i, 1)
//       if( sArr.join('') === sArr.reverse().join('')) {
//         answer = "YES"
//         break
//       }else{
//         answer = "NO"
//       }
//       sArr = s.split('')
//     }
//   }
//   return answer
// }
// console.log(solution6("abababa"))
// console.log(solution6("abcabbakcba"))
// console.log(solution6("abcacbakcba"))
// console.log(solution6("abccba"))

//-----2------
// function solution(s) {
//   let answer = 'NO';
//   let str = '';

//   for (let i = 0; i < s.length; i++) {
//     str = s.split('');
//     str.splice(i, 1);
//     if (str.join('') === str.reverse().join('')) answer = 'YES';
//   }

//   return answer;
// }

// console.log(solution('abcbdcba')); // YES
// console.log(solution('abcabbakcba')); // YES
// console.log(solution('abcacbakcba')); // NO
