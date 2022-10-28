function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let arr = [...s];
  let alphabet = [];
  for (let i = 0; i < arr.length; i++) {
    alphabet.push(arr[i]);
    let str = alphabet.join("");
    for (let j = 0; j < numbers.length; j++) {
      if (str === numbers[j]) {
        s = s.replace(str, j);
        alphabet = [];
      }
    }
  }
  return +s;
}

console.log(solution("zerofiveseven"));

/*
인덱스와 문자가 매칭이 된다.
s.split(numbers[i]) >> */
