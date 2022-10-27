function solution(n, lost, reserve) {
  /*전체 학생에서 체육복을 도난 당한 학생 수를 제외한 값을 변수 answer에 저장한다.
  answer == 체육복을 도난 당하지 않은 학생 수*/
  let answer = 0;
  answer = n - lost.length;

  //체육복을 두개 들고있는 사람 수만큼 반복한다.
  for (let i = 0; i < reserve.length; i++) {
    //만약, 체육복을 두개 가져온 사람 오른쪽, 왼쪽 사람이 잃어버린 사람일 때에는 answer에 1씩 더해주고 잃어버린 사람을 제외
    if (reserve[i] + 1 == lost[i] || reserve[i] - 1 == lost[i]) {
      answer += 1;
      lost.slice(i, 1);
    } 
    // 만약 두개 들고 온 사람이 잃어버렸다면 아무일도 일어나지 않고 계속
    else if (reserve[i] == lost) continue;
  }
  //answer == 체육복을 도난 당하지 않은 학생 수 + 체육복 두개 들고 온 학생에게 체육복을 빌린 학생 수
  return answer;
}
