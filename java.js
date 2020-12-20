// function solution(s, n) {
//   let answer = '';
//   alp =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S', 'T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m', 'n','o','p','q','r','s','t','u','v','w','x','y','z']
//   let arr = s.split('');
//   for(let i =0; i < arr.length; i++){
//     if(arr[i] === ' '){
//       answer+=' ';
//     }
//     for(let j =0; j < alp.length; j++){
//       if(arr[i] === alp[j]){
//         answer+=alp[j+n];
//       }
//       continue;
//     }
//   }
//   return answer;
// }
//
// console.log(solution('a B  c', 3));

// function solution(n) {
//   var answer = 0;
//   let arr = String(n).split('')
//
//   arr.sort(function(a, b) {
//     return a - b;
//   });
//
//   for(let i =0; i < arr.length; i++){
//     answer += (Number(arr[i]))
//   }
//
//   return answer;
// }
//
//
// console.log(solution(123415265))
// let board = [
//   [0, 3, 0, 2, 6, 0, 7, 0, 1],
//   [6, 8, 0, 0, 7, 0, 0, 9, 0],
//   [1, 9, 0, 0, 0, 4, 5, 0, 0],
//   [8, 2, 0, 1, 0, 0, 0, 4, 0],
//   [0, 0, 4, 6, 0, 2, 9, 0, 0],
//   [0, 5, 0, 0, 0, 3, 0, 2, 8],
//   [0, 0, 9, 3, 0, 0, 0, 7, 4],
//   [0, 4, 0, 0, 5, 0, 0, 3, 6],
//   [7, 0, 3, 0, 1, 8, 0, 0, 0],
// ];
// const sudoku = function (board) {
//   const N = board.length;
//   const boxes = [
//     [0, 0, 0, 1, 1, 1, 2, 2, 2],
//     [0, 0, 0, 1, 1, 1, 2, 2, 2],
//     [0, 0, 0, 1, 1, 1, 2, 2, 2],
//     [3, 3, 3, 4, 4, 4, 5, 5, 5],
//     [3, 3, 3, 4, 4, 4, 5, 5, 5],
//     [3, 3, 3, 4, 4, 4, 5, 5, 5],
//     [6, 6, 6, 7, 7, 7, 8, 8, 8],
//     [6, 6, 6, 7, 7, 7, 8, 8, 8],
//     [6, 6, 6, 7, 7, 7, 8, 8, 8],
//   ];
//   const getBoxNum = (row, col) => boxes[row][col];
//
//   const blanks = [];
//   const rowUsed = [];
//   const colUsed = [];
//   const boxUsed = [];
//   for (let row = 0; row < N; row++) {
//     rowUsed.push(Array(N + 1).fill(false));
//     colUsed.push(Array(N + 1).fill(false));
//     boxUsed.push(Array(N + 1).fill(false));
//   }
//
//   for (let row = 0; row < N; row++) {
//     for (let col = 0; col < N; col++) {
//       if (board[row][col] === 0) {
//         blanks.push([row, col]);
//       } else {
//         const num = board[row][col];
//         const box = getBoxNum(row, col);
//         rowUsed[row][num] = true;
//         colUsed[col][num] = true;
//         boxUsed[box][num] = true;
//       }
//     }
//   }
//
//   const isValid = (row, col, num) => {
//     const box = getBoxNum(row, col);
//     return (
//         rowUsed[row][num] === false &&
//         colUsed[col][num] === false &&
//         boxUsed[box][num] === false
//     );
//   };
//
//   const toggleNum = (row, col, num) => {
//     const box = getBoxNum(row, col);
//     board[row][col] = num;
//     rowUsed[row][num] = !rowUsed[row][num];
//     colUsed[col][num] = !colUsed[col][num];
//     boxUsed[box][num] = !boxUsed[box][num];
//   };
//
//   const aux = (idx, blanks, board) => {
//     if (idx === blanks.length) {
//       return true;
//     }
//
//     const [row, col] = blanks[idx];
//     for (let num = 1; num <= 9; num++) {
//       if (isValid(row, col, num) === true) {
//         toggleNum(row, col, num);
//         if (aux(idx + 1, blanks, board) === true) {
//           return true;
//         }
//         toggleNum(row, col, num);
//       }
//     }
//     return false;
//   };
//
//   aux(0, blanks, board);
//   return board;
// };
// console.log(sudoku(board));


// /**
//  * @param {string} s
//  * @return {string}
//  */
// var sortString = function(s) {
//   let sTring = ''; // sTring을 반환할것. ex) leetcode => cdelotee
//   let arr = s.split(''); //arr이라는 배열에 s문자열을 한글자씩 쪼개어서 넣음.
//   //leetcode => arr['l','e','e','t','c','o','d','e']
//   let count = 0;
//   let test = []; //test라는 배열을 만듬
//   // let count = 0; //count라는 수를 초기화.
//   let spare = [];
//   for(let i =0; i< arr.length; i++){ //for문을 arr의 길이만큼 순회.
//     if(test.length === 0){ //test에 아무것도 들어있지 않으면.
//       test.push(arr[i]);  //test에 arr[i]를 넣는다.
//     }if(test.includes(arr[i])){ //test에 arr[i]와 동일한 값이 있으면, 카운트를 올림.
//       spare.push(arr[i])
//     }else { // 그것도 아니라면 그냥 test에 arr[i]를 넣는다.
//       test.push(arr[i]);
//     }
//   }
//   function recursion(spare){
//     if(spare.length === 0){
//       return;
//     }

//     for(let el of spare){
//       if(!pertinentArray.includes(el)){
//         pertinentArray.push(el);
//       }if(pertinentArray.includes(el)){
//         recursion(arr)
//       }
//     }
//
//   }
//
//   recursion(spare);
//
//   for()
//   return sTring;
// };
//

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  let sTring = ''; // sTring을 반환할것. ex) leetcode => cdelotee
  let spare = [];
  let dSpare = [];
  let arr = s.split(''); //arr이라는 배열에 s문자열을 한글자씩 쪼개어서 넣음.
  //leetcode => arr['l','e','e','t','c','o','d','e']
  let count = 2;
  let test = [];
  for(let i =0; i< arr.length; i++){ //for문을 arr의 길이만큼 순회.
    if(test.length === 0){ //test에 아무것도 들어있지 않으면.
      test.push(arr[i]);  //test에 arr[i]를 넣는다.
    }else if(test.includes(arr[i])){ //test에 arr[i]와 동일한 값이 있으면, 카운트를 올림.
      spare.push(arr[i])

    }else { // 그것도 아니라면 그냥 test에 arr[i]를 넣는다.
      test.push(arr[i]);
    }

  }
  console.log(test)
  console.log(spare)
  test.sort(); // ['c','d','e','l','o','t'] , spare = ['e','e']
  console.log(test)
  function resursion(spare, count){ //재귀 내에서 박스를 만든다.
    let box =[]
    if(spare.length === 0){
      return;
    }
    for(let i =0; i<spare.length;i++){
      if(!box.include(spare(i))){
        box.push(spare(i))
      }if(box.include(spare(i))){

        dSpare.push(spare[i])
        resursion(dSpare, count+1)

      }

      if(count%2 === 0){
        box.sort().reverse();
      }else{
        box.sort();
      }
      for(let el of box){
        test.push(el);

      }

    }


  }
  for(let el of test){
    sTring+=el;
  }
  return sTring;
}

    let strin = 'aaabbbccc';
    console.log(sortString(strin))