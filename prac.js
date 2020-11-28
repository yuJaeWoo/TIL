class Node {
  //생성자
  constructor(data) {
    this.data = data; // 데이터
    this.next = null // 포인터
  }
}
const Node1 = new Node(10);
const Node2 = new Node(20);


Node1.next = Node2;



let head = Node1;

function add(value){
  let currentPointer = head;

  while (currentPointer.next !== null){

    currentPointer = currentPointer.next;

  }
  currentPointer.next = new Node(value);
}



for(let i = 3; i< 6; i++){
  add(i*10);
}
function print(){
  let printAll = head;

  while (printAll!== null){
    console.log(printAll.data);
    printAll = printAll.next;
  }
}

function insert(findV, insertV){
  let currentPointer = head;
  let inVal = new Node(insertV);
  while (currentPointer.data !== findV){
    currentPointer = currentPointer.next;
  } // c.p -> inval -> c.p.next

  inVal.next = currentPointer.next;
  currentPointer.next = inVal;
}

insert(30, 35)


// function deleteNode(val){
//   let currentPointer = head;
//   //커런트포인터를 헤드로 잡아줌
//   if(currentPointer.data === val){
//     head = head.next;
//   }else{
//     while (currentPointer.data !== val){
//       //현재 cp의 다음 노드의 데이터가 입력받은값이 아니라면 순회
//       currentPointer = currentPointer.next;
//     } //값이 일치하면
//     let temp = currentPointer.next;
//     //템프를 커런트포인터의 다음 노드로 지정
//     currentPointer.next = temp.next;
//     //그리고 커렌트포인터의 다음값을 템프의 다음값으로 지정해주면 자동으로 참조값이 없어진 temp는 사라짐.
//   }
// }







function deleteNode(val){
  let currentPointer = head;
  //커런트포인터를 헤드로 잡아줌
  if(currentPointer.data === val){
    head = head.next;
  }else{
    let prePointer = null;
    while (currentPointer.next.data !== val){
      prePointer = currentPointer;
      currentPointer = currentPointer.next;
    }
    prePointer.next = currentPointer.next;
  }
}
deleteNode(10);
deleteNode(40);
deleteNode(50);
print();
