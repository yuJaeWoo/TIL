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
      this.head = this.head.next;
    } else {
      while (currentPointer.next.value !== value) {
        currentPointer = currentPointer.next;
      }
      let temp = currentPointer.next;
      currentPointer.next = temp.next;
      temp.next = null;
      this._size--;
    }

  }
  insert(findV, insertV){
    let currentPointer = this.head;
    let inVal = new Node(insertV);
    while (currentPointer.value !== findV){
      currentPointer = currentPointer.next;
    } // c.p -> inval -> c.p.next

    inVal.next = currentPointer.next;
    currentPointer.next = inVal;
    inVal.prev = currentPointer
    currentPointer.next.prev = inVal;
  }
}

const doubleLinked = new DoubleLinkedList();
doubleLinked.add(44);
doubleLinked.add(5);
doubleLinked.add(55);
doubleLinked.add(57);
doubleLinked.delete(57);

doubleLinked.insert(55, 56);

doubleLinked.print();


swap(a, b){   [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]  }
class Heap{
  constructor(){
    this.heap =[null];
  }
  enqueue(value){
    let child = this.heap.length;
    let parent = Math.floor(cur)/2);
    this.heap.push(value);
  // 추가한 값보다 부모 노드의 값이 더 큰 값이 나올 때 까지 root를 향해 Swap해간다.
  while(parent < val) {
  this.swap(this.heap[parent], this.heap[child]);
  child = parent;
  parent = Math.floor(child)/2);
  }
  }


}
