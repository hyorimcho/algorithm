function solution(n) {
    var answer = 0;
    for(let i = 1; i*i<=n; i++){
       (i * i === n ) ? answer = 1 : answer = 2;
    }
    return answer;
}