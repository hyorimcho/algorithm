function solution(sizes) {
  let answer = 0;
  for (let i = 0; i < sizes.length; i++) {
    let tmp = 0;
    if (sizes[i][0] < sizes[i][1]) {
      tmp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = tmp;
    }
  }
  
  return answer;
}
