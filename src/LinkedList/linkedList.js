export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // `get(position)` 获取对应位置的元素。
  get(position) {
    if (position < 1 || position > this.length) return false;
    if (position === 1) {
      return this.head;
    } else {
      let currentNode = this.head;
      let index = 1;
      while (index !== position) {
        currentNode = currentNode.next;
        index++;
      }
      return currentNode;
    }
  }

  // `get(position)` 获取对应位置的元素数据。
  getData(position) {
    return this.get(position)?.data;
  }

  // `append(element)` 向链表尾部添加一个新的项。
  append(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let lastNode = this.get(this.length);
      lastNode.next = newNode;
    }
    this.length++;
  }

  // `toString()` 输出链表的值。
  toString() {
    let currentNode = this.head;
    let result = "";

    while (currentNode) {
      result += currentNode.data + " ";
      currentNode = currentNode.next;
    }

    return result;
  }

  // `insert(position, data)` 向链表的特定位置插入一个新的项。
  insert(position, data) {
    if (position < 1 || position > this.length) return false;
    const newNode = new Node(data);
    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let prevNode = this.get(position - 1);
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
    }
    this.length++;
  }

  // `indexOf(data)` 返回元素在链表中的索引。如果链表中没有该元素就返回-1。
  indexOf(data) {
    let currentNode = this.head;
    let index = 1;
    while (currentNode) {
      if (currentNode.data === data) {
        return index;
      }
      index++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  // `getPrevByData(data)` 返回数据在链表中的上一个节点。如果链表中没有该元素就返回null。
  getPrevByData(data) {
    let currentNode = this.head;
    if (currentNode.data === data) return null;
    while (currentNode && currentNode.next) {
      if (currentNode.next.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // `update(position, data)` 修改某个位置的元素。
  update(position, data) {
    if (position < 1 || position > this.length) return false;
    let node = this.get(position);
    node.data = data;
  }

  // `removeAt(position)` 从链表的特定位置移除一项。
  removeAt(position) {
    if (position < 1 || position > this.length) return false;
    if (position === 1) {
      this.head = this.head.next;
    } else {
      let prevNext = this.get(position - 1);
      prevNext.next = prevNext.next.next;
    }
    this.length--;
  }

  // `remove(data)` 从链表中移除一项。
  remove(data) {
    if (this.head.data === data) this.head = this.head.next;
    let prevNode = this.getPrevByData(data);
    if (prevNode) {
      prevNode.next = prevNode.next.next;
    }
    this.length--;
  }
  
  // `isEmpty()` 如果链表中不包含任何元素，返回 true，如果链表长度大于 0 则返回 false。
  isEmpty() {
    return !this.length;
  }

  // `size()` 返回链表包含的元素个数，与数组的 length 属性类似。
  size() {
    return this.length;
  }
}
