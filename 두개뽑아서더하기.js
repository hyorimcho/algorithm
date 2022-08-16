function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    let sum = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      if (answer.includes(sum) == 0) answer.push(sum);
    }
  }
  return answer.sort(function (a, b) {
    return a - b;
  });
}
