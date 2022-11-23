function solution(nums, n) {
  let answer = 0;
  function count(len) {
    let cnt = 0;
    for (let x of nums) {
      cnt += Math.floor(x / len);
    }
    return cnt;
  }
  let left = 1;
  let right = Math.max(...nums); //nums 중에 가장 큰 값으로 설정해야해서.
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(mid) >= n) {
      //mid값으로 랜선을 잘랐을 때 몇개 나오는지 return
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

console.log(solution([802, 743, 457, 539], 11));

// 정답이 어느 범위 안에 있다는 것을 간파할 수 있으면 결정알고리즘을 쓴다.

// 최소한 답은, 1부터 802 사이에 있는 것이 확실하다.
// left는 1로 하고
// right는 802
// 그럼 mid는 401

// 401이 답이라고 가정해본다.
// 802 나누기 401의 몫 = 2
// 743 나누기 401의 몫 = 1
// 457 나누기 401의 몫 = 1
// 539 나누기 401의 몫 = 1
// 토탈 5

// 따라서 답은 401보다 더 작아야 한다. 따라서 right를 mid-1 (400) 로 변경해준다.
// mid는 200으로 바뀐다.

// 802 나누기 200 몫 = 4
// 743 나누기 200 몫 = 3
// 457 나누기 200 몫 = 2
// 539 나누기 200 몫 = 2
// 토탈 11

// 200보다 더 큰 값이 있는지 left = 201 / right = 400으로 알아본다.

//right = 299 ... 이렇게 좁혀들어가다보면 right < left 될 때가 있다.
