//정규식을 쓰면 될 것 같은데...

function solution(s) {
  var answer = true;
  if(s.length !== 4 || s.length !== 6) return false;
  for(let i=0; i<s.length; i++){
    s.charcodeAt(i) >= 48 && s.charcodeAt(i) <= 57 
  }
  return answer;
}
