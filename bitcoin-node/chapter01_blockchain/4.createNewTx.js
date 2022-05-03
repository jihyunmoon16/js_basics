const { v4: uuidv4 } = require("uuid");

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

  // Get a last block
  getLastBlock() {
    // 잘 모르겠으면 콘솔로그 찍어보면 됨.
    console.log("this.chain => ", this.chain);
    console.log("this.chain.length => ", this.chain.length);
    return this.chain[this.chain.length - 1];
  }

  // 새로운 트랜잭션을 생성하는 코드
  createNewTransaction(amount, sender, recipient) {
    const newTransaction = {
      transactionId: uuidv4().split("-").join(""),
      amount: amount,
      sender: sender,
      recipient: recipient,
    };
    this.pendingTxs.push(newTransaction);

    // 해당(새롭게 만든) 트랜잭션이 몇 번째 블록에서 추가 되었는지 알려주는 코드이다.
    return this.getLastBlock()["index"] + 1;
  }
}

module.exports = Blockchain;
