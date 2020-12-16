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

function solution(n) {
  var answer = 0;
  let arr = String(n).split('')

  arr.sort(function(a, b) {
    return a - b;
  });

  for(let i =0; i < arr.length; i++){
    answer += (Number(arr[i]))
  }

  return answer;
}


console.log(solution(123415265))
