function solution(s) {
  let answer = "";
  let longestStr = 0;
  for (let x of s) {
    if (x.length > longestStr) {
      longestStr = x.length;
      answer = x;
    }
  }
  return answer;
}
console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
