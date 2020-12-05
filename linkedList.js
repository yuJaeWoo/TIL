// insert & delete => current pointer
class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  add(value) {
    let node = new Node(value);
    let currentPointer;
    if (this.head) {
      currentPointer = this.head;
      while (currentPointer.next !== null) {
        currentPointer = currentPointer.next;
      }
      currentPointer.next = node;
      currentPointer.next.prev = currentPointer;
    } else {
      this.head = node;

    }
    this._size++;

  }

  print() {
    let currentPointer = this.head;
    while (currentPointer.next !== null) {
      // 내 자신이 null이 아닐 때까지, pointer.next !==null로 할 경우, 마지막 노드의 값이
      // 콘솔에 안찍히게 됨
      console.log(currentPointer.value);
      // while문 돌면서 데이터를 찍고
      currentPointer = currentPointer.next;
      // 포인터를 다음노드를 가르키게 하기
    }
    console.log(currentPointer.value);
    // 수동으로 마지막 값을 찍어줌
    while (currentPointer.prev !== null) {
      console.log(currentPointer.value);
      currentPointer = currentPointer.prev;
    }
    console.log(currentPointer.value);
    // 수동으로 첫번째 노드를 찍어주기
  }
  delete(value) {
    let currentPointer = this.head;
    //커런트포인터를 헤드로 잡아줌

    if (currentPointer.value === value) {
      //head
      head = head.next;
    } else {
      while (currentPointer.next.value !== value) {
        currentPointer = currentPointer.next;
      } //값이 일치하면
      let temp = currentPointer.next;
      //템프를 커런트포인터의 다음 노드로 지정
      currentPointer.next = temp.next;
      temp.next = null;
      //그리고 커렌트포인터의 다음값을 템프의 다음값으로 지정해주면 자동으로 참조값이 없어진 temp는 사라짐
      this._size--;
    }

  }
}
let abc = new DoubleLinkedList();
const doubleLinked = new DoubleLinkedList();
doubleLinked.add(44);
doubleLinked.add(5);
doubleLinked.delete(5);

doubleLinked.print();