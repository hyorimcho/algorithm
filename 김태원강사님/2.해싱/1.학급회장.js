//문자열의 빈도수 카운팅
// undefined === false
// falsy 한거 찾아보기
// || 에서 false 면 뒤의 값을 리턴

function solution(s){
  let answer='';
  let sH = new Map();
  for (let x of s){
    sH.set(x, (sH.get(x)||0)+1);
  }
  let max =0;
  for(let key of sH.keys()){
    max=sH.get(key > max){
      max = sH.get(key);
      answer=key;
    }
  }
return answer;
}