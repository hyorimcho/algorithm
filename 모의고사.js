/*1. 수포자 1,2,3이 답안지 answers와 비교하여 각각 몇개를 맞았는지 구한다.
2. 수포자 1,2,3중 가장 높은 점수를 받은 사람만 뽑아낸다.
3. 동일 점수가 있더라도 차례로 나열하면 오름차순으로 정렬할 수 있다.*/

function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let length = answers.length;
  let score = [0, 0, 0];
  let answer = [];

  for (let i = 0; i < length; i++) {
    if (one[i % 5] == answers[i]) score[0] += 1;
    if (two[i % 8] == answers[i]) score[1] += 1;
    if (three[i % 10] == answers[i]) score[2] += 1;
  }

  //Math.max를 이용하여 score안의 점수 중 가장 큰 수를 골라낼 수 있다.
  const max = Math.max(...score);
  for (let j = 0; j < 3; j++) {
    if (score[j] === max) {
      answer.push(j + 1);
    }
  }
  return answer;
}
