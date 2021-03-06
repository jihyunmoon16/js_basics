const { v4: uuidv4 } = require("uuid");
const sha256 = require("sha256");

class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTxs = [];

    this.createNewBlock("00000", "glkjlkw124", 0);
  }

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

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

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

  hashBlock(previousBlockHash, currentBlockData, nonce) {
    const stringData =
      previousBlockHash + JSON.stringify(currentBlockData) + nonce.toString();

    const hashedData = sha256(stringData);
    return hashedData;
  }

  // Proof of Work
  pow(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hashVal = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    // while (hashVal.substring(0, 3) !== "000") {
    while (!hashVal.startsWith("0000")) {
      nonce++;
      hashVal = this.hashBlock(previousBlockHash, currentBlockData, nonce);
      console.log("hashVal", hashVal);
    }
    return nonce;
  }
}

module.exports = Blockchain;
