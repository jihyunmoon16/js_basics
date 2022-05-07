// 자바스크립트로 비트코인 블럭 만들기
class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTxs = [];

    // Create a Genesis Block
    this.createNewBlock("00000", "glkjlkw124", 0);
  }

  // 클래스 안에 있는 메소드(함수)
  createNewBlock(previousBlockHash, hash, nonce) {
    // Create a new block  블록은 다음과 같은 정보를 가지고 있음.
    const newBlock = {
      index: this.chain.length,
      timestamp: Date.now(),
      previousBlockHash: previousBlockHash,
      hash: hash,
      nonce: nonce,
      transactions: this.pendingTxs,
    };
    this.chain.push(newBlock);
    this.pendingTxs = [];

    return newBlock;
  }
}

module.exports = Blockchain;
