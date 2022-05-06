const { assert, expect } = require("chai");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const UnionFind = require("../UnionFind");

describe("test UnionFind", () => {
  let uf;
  beforeEach(() => {
    uf = new UnionFind(10);
  });
  it("UnionFind is a function", () => {
    expect(UnionFind).to.be.a("function");
  });
  it("n is correct", () => {
    expect(uf.size).to.be.equal(10);
    expect(uf.father).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("can merge", () => {
    uf.merge(0, 1);
    console.log(uf.father);
    expect(uf.find(0)).to.equal(1);
    expect(uf.size).to.equal(9);
  });
});
