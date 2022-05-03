// 자바스크립트로 비트코인 블럭 만들기
class Blockchain {
  constructor() {
    console.log("this is a constructor");
    this.chain = []; // this는 Blockchain을 가리킴
    this.pendingTxs = []; // mempool, Txs => Transactions

    // Create a Genesis Block
    this.createNewBlock("00000", "glkjlkw124", 0);
  }

  // 클래스 안에 있는 메소드(함수)
  createNewBlock(parentHash, hash, nonce) {
    const newBlock = {
      index: this.chain.length,
      timestamp: Date.now(),
      parentHash: parentHash, // 키랑 value랑 같으면 생략할 수 있다. 최신문법
      hash: hash,
      nonce: nonce,
      transactions: this.pendingTxs,
    };
    this.chain.push(newBlock);
    this.pendingTxs = []; // 새 블럭 만들고 나면 펜딩트랜젝션을 다시 빈 배열로 클리어해줌.

    return newBlock;
  }
}

module.exports = Blockchain;
