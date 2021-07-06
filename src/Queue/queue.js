export default class Queue {
  constructor() {
    this.items = [];
  }

  // enqueue(item) 入队，从队列末尾加入元素
  enqueue(item) {
    this.items.push(item);
  }

  //dequeue() 出队，从队列中删除头元素
  dequeue() {
    return this.items.dequeue();
  }

  // front() 查看队列的对头元素
  front() {
    return this.items[0];
  }

  //isEmpty() 判断队列是否为空
  isEmpty() {
    return !this.items.length
  }
}
