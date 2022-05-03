const Blockchain = require("./5.hashBlock");
const bitcoin = new Blockchain();

bitcoin.createNewBlock("alkjdglkj1lk24", "alkjfdlk234235", 100);

const previousBlockHash = "alkjdlk323asdg";

const currentBlockData = [
  {
    amount: 10,
    sender: "abcd123",
    recipient: "def123",
  },
  {
    amount: 5,
    sender: "zef143",
    recipient: "asg123",
  },
  {
    amount: 100,
    sender: "qwefd123",
    recipient: "ashr123",
  },
];

const nonce = 3000;

const hashBlock = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(hashBlock);
