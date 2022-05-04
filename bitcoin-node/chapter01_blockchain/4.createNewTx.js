const { v4: uuidv4 } = require("uuid");

class Blockchain {
  constructor() {
    console.log("this is a constructor");
    this.chain = [];
    // 여기에 담긴 거래 정보가 기록되지 않고 있다가 새로운 블록이 채굴되면(mined) 그때 기록됨.
    // New transcations are validated when recorded or when a new block is created/mined
    // Then, it cannot be changed. 
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
    // 새롭게 만들어진 트랜젝션을 펜딩 트렌젝션 배열에 넣어준다.
    this.pendingTxs.push(newTransaction);

    // 해당(새롭게 만든) 트랜잭션이 몇 번째 블록에서 추가 되었는지 알려주는 코드이다.
    // 이건 새로 채굴된 블록에 저장됨. 
    // New transactions will be stored in the next created block.
    return this.getLastBlock()["index"] + 1;
  }
}

module.exports = Blockchain;
