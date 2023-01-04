function solution(slice, n) {
    var answer = 0;
    answer = (parseInt(n/slice));
    (n%slice) === 0? answer : answer += 1;
    return answer;
}