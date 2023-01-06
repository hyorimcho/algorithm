function solution(array) {
    var answer = 0;
    var index = parseInt(array.length/2) 
    array.sort((a,b) => a-b)
    answer = array[index]
    return answer;
}

//중간번째 갯수는 parseInt(array.length / 2) - 1 