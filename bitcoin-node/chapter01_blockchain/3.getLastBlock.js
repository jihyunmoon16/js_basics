// 자바스크립트로 비트코인 블럭 만들기
class Blockchain {
  constructor() {
    console.log("this is a constructor");
    this.chain = []; 
    this.pendingTxs = []; 

    // Create a Genesis Block
    this.createNewBlock("00000", "glkjlkw124", 0);
  }

  // 클래스 안에 있는 메소드(함수)
  createNewBlock(parentHash, hash, nonce) {
    const newBlock = {
      index: this.chain.length,
      timestamp: Date.now(),
      parentHash: parentHash, 
      hash: hash,
      nonce: nonce,
      transactions: this.pendingTxs,
    };
    this.chain.push(newBlock);
    this.pendingTxs = []; 

    return newBlock;
  }

  // Get a last block
  getLastBlock() {
    // 잘 모르겠으면 콘솔로그 찍어보면 됨.
    console.log("this.chain => ", this.chain);
    console.log("this.chain.length => ", this.chain.length);
    return this.chain[this.chain.length - 1];
  }
}

module.exports = Blockchain;
