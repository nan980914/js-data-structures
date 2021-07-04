export default class Stack {
  constructor() {
    this.items = [];
  }

  // `push(item)`压栈操作，往栈里添加元素
  push(item) {
    this.items.push(item);
  }

  // `pop`出栈操作，从栈中弹出元素，并返回那个元素
  pop() {
    return this.items.pop();
  }

  // `peek` 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // `isEmpty` 判断栈是否为空
  isEmpty() {
    return !this.items.length;
  }

  // `size` 取栈中元素个数
  size() {
    return this.items.length;
  }

  // `toString` 字符串返回栈中元素的数据
  toString() {
    let result = "";
    for (let item of this.items) {
      result += item + "";
    }
    return result;
  }
}
