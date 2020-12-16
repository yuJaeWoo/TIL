// // // class Node {
// // //   //생성자
// // //   constructor(data) {
// // //     this.data = data; // 데이터
// // //     this.next = null; // 포인터
// // //     this.prev = null; // 이전 포인터
// // //   }
// // // }
// // // const Node1 = new Node(10);
// // // const Node2 = new Node(20);
// // //
// // //
// // // Node1.next = Node2;
// // //
// // //
// // //
// // // let head = Node1;
// // //
// // // function add(value){
// // //   let currentPointer = head;
// // //
// // //   while (currentPointer.next !== null){
// // //
// // //     currentPointer = currentPointer.next;
// // //
// // //   }
// // //   currentPointer.next = new Node(value);
// // //
// // // }
// // //
// // //
// // //
// // // for(let i = 3; i< 6; i++){
// // //   add(i*10);
// // // }
// // // function print(){
// // //   let printAll = head;
// // //
// // //   while (printAll!== null){
// // //     console.log(printAll.data);
// // //     printAll = printAll.next;
// // //   }
// // // }
// // //
// // // function insert(findV, insertV){
// // //   let currentPointer = head;
// // //   let inVal = new Node(insertV);
// // //   while (currentPointer.data !== findV){
// // //     currentPointer = currentPointer.next;
// // //   } // c.p -> inval -> c.p.next
// // //
// // //   inVal.next = currentPointer.next;
// // //   currentPointer.next = inVal;
// // // }
// // //
// // // insert(30, 35)
// // // //  head = [node1[val] / next -> null]         ->
// // //
// // // function deleteNode(val){
// // //   let currentPointer = head;
// // //   //커런트포인터를 헤드로 잡아줌
// // //
// // //   if(currentPointer.data === val){
// // //     //head
// // //     head = head.next;
// // //   }else{
// // //     while (currentPointer.data !== val){
// // //       //현재 cp의 다음 노드의 데이터가 입력받은값이 아니라면 순회
// // //       currentPointer = currentPointer.next;
// // //     } //값이 일치하면
// // //     let temp = currentPointer.next;
// // //     //템프를 커런트포인터의 다음 노드로 지정
// // //     currentPointer.next = temp.next;
// // //     //그리고 커렌트포인터의 다음값을 템프의 다음값으로 지정해주면 자동으로 참조값이 없어진 temp는 사라짐.
// // //   }
// // // }
// // // //1. temp를 이용한 방식이에요
// // // // []->  [] -> [value] -> []
// // // //                C ->
// // // //                temp->
// // //
// // //
// // //
// // //
// // //
// // // function deleteNode(val){
// // //   let currentPointer = head;
// // //   //커런트포인터를 헤드로 잡아줌
// // //   if(currentPointer.data === val){
// // //     head = head.next;
// // //   }else{
// // //
// // //
// // //
// // //
// // //
// // //     let prePointer;
// // //     while (currentPointer.next.data !== val){
// // //       prePointer = currentPointer;
// // //
// // //       currentPointer = currentPointer.next;
// // //     }
// // //     prePointer.next = currentPointer.next;
// // //   }
// // // }
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // // process.stdin.setEncoding('utf8');
// // // function stars(data){
// // //   const n = data.split(" ");
// // //   const a = Number(n[0]), b = Number(n[1]);
// // //
// // //   for(let i = b; i< b; i++){
// // //     console.log('*')
// // //     for(let j = a; j <a; j++){
// // //     console.log('*')
// // //     }
// // //   }
// // //
// // //
// // // }
// // //
// // // console.log(stars('5 3'))
// //
// // // const rockPaperScissors = function (number) {
// // //   // TODO: 여기에 코드를 작성합니다.
// // //   //가위 바위 보의 요소를 가진 배열을 만들고, 그와 동시에 결과값이 도출될 빈 배열 선언
// // //   let cases = ["rock", "paper", "scissors"];
// // //   let result = [];
// // // //파라미터에 값을 넣어주지않는다면 기본 3판이라는 전제조건에 맞게끔 number를 3으로 초기화.
// // //   if (number === undefined) {
// // //     number = 3;
// // //   }
// // //  //고차함수로 모든케이스를 출력하는 함
// // //   function check(count) {
// // //     //반환을 위해서 빈배열 생성
// // //     let newStorage = [];
// // //     //초기 카운트를 0으로 하고 0일때에는 케이스의 요소를 전부 result에 직접 넣는다.
// // //     if (count === 0) {
// // //       cases.forEach(() => result.push([]));
// // //     } else if (count === 1) { //카운트가 1일때에는 콜백함수를 이용하여 result의 요소들을 elem에 넣는다.
// // //       result.forEach((elem, idx) => elem.push(cases[idx]));
// // //     } else { //count가 2이상일때는 result의 요소들을 돌면서 내부에서 cases의 요소를 한번 더돌리고 newStorage에 넣는다.
// // //       result.forEach(elem => {
// // //         cases.forEach(item => newStorage.push(elem.concat(item)));
// // //         result = newStorage;
// // //       });
// // //     }
// // //
// // //     if (number === count) {
// // //       return;
// // //     }
// // //
// // //     check(count + 1);
// // //   };
// // //
// // //   check(0);
// // //
// // //   return result;
// // // };
// // //
// // // console.log(rockPaperScissors())
// // // // ex) 숫자가 3일때
// // // // [] 빈배열부터 시작한다. 숫자 : 0
// // // // var plays = ['rock', 'paper', 'scissors']의 각요소를 순회한다.
// // // // 첫번째로 'rock'요소에 접근한 후 1번의 []에 연결시켜준 후 그것을 재귀함수의 첫번째 인자로 넣고 두번째 인자인 숫자에 +1을 하여 재귀함수를 실행한다.
// // // // 두번째 인자의 숫자(1)와 목표숫자인 3이 같지 않으므로 다시 play의 각 요소를 순회한다.
// // // // 첫번째로 'rock' 요소에 접근한다. 그릴고 현재 첫번째 인자로 들어온 ['rock']에 연결시켜준다. 그리고 그것을 재귀함수의 첫번째 인자로 넣고, 두번째 인자 숫자에 + 1을 해주고 재귀함수를 실행한다.
// // // // 현재 인자로 넘어온 숫자와 목표 숫자가 같지 않으므로 위의 과정을 목표 숫자가 같을때 까지 반복해준다.
// // // // 현재 인자로 넘어온 숫자와 목표 숫자가 같다면 sequences 배열에 push해 준다.
// // // // 이렇게 plays의 각 요소에 재귀함수를 실행시켜주면서 목표숫자와 같아지면 결과값에 push해주고 한 요소 안에서 재귀가 끝나면 그 다음 요소에 재귀를 실행하는 식으로 진행하면 된다.
// //
// // const rockPaperScissors = function (rounds) {
// //   rounds = rounds || 3;
// //   const rps = ['rock', 'paper', 'scissors'];
// //
// //   const outcomes = [];
// //   let permutate = function (roundsToGo, playedSoFar) {
// //     //종료문
// //     if (roundsToGo === 0) {
// //       outcomes.push(playedSoFar);
// //       return;
// //     }
// //
// //     for (let i = 0; i < rps.length; i++) {
// //       let currentPlay = rps[i];
// //       permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
// //     }
// //   };
// //
// //   permutate(rounds, []);
// //
// //   return outcomes;
// // };
// //
// // console.log(rockPaperScissors(1));
//
//
// const isSubsetOf = function (base, sample) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = false;
//   let count = sample.length;
//   //sample을 돌면서 base의 값과 비교
//   //값이 같은게 나오면 base의 현재값까지의 앞의 수들은 검사할 필요가 없어짐(삭제)
//   base.sort(function(a, b) { // 오름차순
//     return a - b});
//   sample.sort(function(a, b) { // 오름차순
//     return a - b});
//
//   for(let i =0; i< sample.length; i++){
//     let abc = sample[i];
//     for(let j=0; j < base.length; j++){
//       let bcd = base[j];
//       if(abc === bcd){
//         count -= 1;
//         break;
//       }else if(abc !== bcd){
//         base.shift();
//       }
//     }
//   }
//
//   if(count === 0){
//     result = true;
//   }else{
//     return false;
//   }
//   return result;
// };
//
// console.log(isSubsetOf([1,2,6,4,3,5,7,8,9], [3,4]));
//
//
// function fibonacci(n, memo) {   memo= memo || {};   if (memo[n] !== undefined) {     return memo[n];   }   if (n <= 1) return n   return memo[n] = (fibonacci(n - 2, memo) + fibonacci(n - 1, memo));   // 할당문은 객체나, 배열이나 변수에 넣어 주는 것 
// // 할당문은 항상 우변에 값을 완료 값으로 가지게 됨 => 항상 우변에 있는 값이 평가가 됨 
// // 그리고 return 하게 되면 완료 값이 return 하게 됨 } 

function solution(s, n) {
  var answer = '';
  alp = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
  let arr = s.toLowerCase().split('');

  for(let i =0; i < arr.length; i++){
    for(let j =0; j < alp.length; j++){
      if(arr[i] === alp[j]){
        arr[i] = alp[j+n];
        answer.join(arr[i]);
      }else if(arr[i] === ' '){
        answer.join(arr[i]);
      }
    }
  }
  return answer;
}

console.log(solution('AB', 2));