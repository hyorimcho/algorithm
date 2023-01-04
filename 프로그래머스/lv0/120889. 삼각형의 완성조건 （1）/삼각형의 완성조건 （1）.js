function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => a-b)
    sides[0] + sides[1] > sides[2] ? answer = 1 : answer = 2
    return answer;
}