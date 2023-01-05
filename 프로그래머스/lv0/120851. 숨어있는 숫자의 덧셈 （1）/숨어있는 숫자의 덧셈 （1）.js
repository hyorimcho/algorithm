function solution(my_string) {
    var answer = 0;
    my_string = my_string.toString()
    for(let x of my_string){
        if( 1<= x && x <=9 ){
            answer += parseInt(x);
        }
    }
    return answer;
}