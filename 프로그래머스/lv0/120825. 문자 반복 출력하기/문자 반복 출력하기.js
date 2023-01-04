function solution(my_string, n) {
    var answer = '';
    for(let x of my_string){
       answer += x.repeat(n)}
    return answer;
}