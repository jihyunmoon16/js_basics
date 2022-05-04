// 자바스크립트로 비트코인 블럭 만들기
class Blockchain {
  constructor() {
    console.log("this is a constructor");
    // this는 Blockchain을 가리킴
    // 여기에 만든 블록체인을 다 넣음.
    this.chain = [];
    // mempool, Txs => Transactions
    // 새로운 트랜젠션을 블록에 들어가기 전에 담아놓을 곳.
    this.pendingTxs = [];
  }

  // 클래스 안에 있는 메소드(함수)
  createNewBlock(parentHash, hash, nonce) {
    // 새로운 블록을 만듬
    const newBlock = {
      index: this.chain.length,
      timestamp: Date.now(),
      // 키랑 value랑 같으면 생략할 수 있다. 최신문법
      // Refers hash from previous data or block
      parentHash: parentHash,
      // data from newBlock
      // 모든 트랜젝션 정보가 싱글 string으로 압축됨 -> 이게 해쉬임.
      // Refers hash for the current data
      hash: hash,
      nonce: nonce,
      transactions: this.pendingTxs,
    };
    // 새로 만든 블록을 chain 배열에 넣어줌.
    this.chain.push(newBlock);
    // 새 블럭 만들고 나면 펜딩트랜젝션을 다시 빈 배열로 클리어해줌.
    // 왜냐면, 펜딩트랜젝션에 있던 모든 트랜젝션 정보가 새로운 블럭이 만들어 지면서 거기에 저장되었기 때문에 새로운 블록을 위해서 다시 새롭게 초기화 해줌.
    this.pendingTxs = [];

    return newBlock;
  }
}

module.exports = Blockchain;
