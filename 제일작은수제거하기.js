//않이.. 외않되..?


unction solution(arr) {
  let min = arr[0];
  if(arr.length==1) return [-1];
  else{
      for(let i=1; i<arr.length; i++){
          if(arr[i]<arr[i-1]) min = arr[i];
      }
  }
  arr.splice(arr.indexOf(min),1);
  return arr;
}