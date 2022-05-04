const { v4: uuidv4 } = require("uuid");
const sha256 = require("sha256");

class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTxs = [];

    this.createNewBlock("00000", "glkjlkw124", 0);
  }

  // 클래스 안에 있는 메소드(함수)
  createNewBlock(parentHash, hash, nonce) {
    const newBlock = {
      index: this.chain.length,
      timestamp: Date.now(),
      parentHash: parentHash,
      nonce: nonce,
      transactions: this.pendingTxs,
    };
    this.chain.push(newBlock);
    this.pendingTxs = [];

    return newBlock;
  }

  // Get a last block
  getLastBlock() {
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

    return this.getLastBlock()["index"] + 1;
  }

  // 조금만 수정해도 해쉬가 완전히 바뀌기 때문에 변화를 쉽게 알아차릴 수 있다.
  // Same input -> same hash output
  hashBlock(previousBlockHash, currentBlockData, nonce) {
    // parameter로 받아온 3개 정보를 하나의 string으로 만들어준다.
    // currentBlockData는 object or array이기 때문에 JSON.stringify를 사용해서 string으로 만들어줌.
    const stringData =
      previousBlockHash + JSON.stringify(currentBlockData) + nonce.toString();

    const hashedData = sha256(stringData);
    return hashedData;
  }
}

module.exports = Blockchain;
