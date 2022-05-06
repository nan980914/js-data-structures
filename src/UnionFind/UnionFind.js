class UnionFind {
  constructor(n) {
    this.father = new Array(n).fill(0).map((v, i) => (v = i));
    this.size = n;
  }
  find(x) {
    if (x == this.father[x]) return x;
    else {
      this.father[x] = this.find(this.father[x]); //父节点设为根节点
      return this.father[x]; //返回父节点
    }
  }
  merge(i, j) {
    this.father[this.find(i)] = this.find(j);
    this.size--;
  }
}

module.exports = UnionFind;
