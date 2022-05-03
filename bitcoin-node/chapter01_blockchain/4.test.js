const Blockchain = require("./4.createNewTx");
const bitcoin = new Blockchain();

bitcoin.createNewBlock("alkjdglkj1lk24", "alkjfdlk234235", 100);
bitcoin.createNewBlock("alkj234234dglkj1lk24", "alkjfdlk234235", 200);
bitcoin.createNewBlock("alkjdsdfsdfhglkj1lk24", "alkjfdlk234235", 500);

bitcoin.createNewTransaction(100, "abc123", "def123");

console.log(bitcoin);

bitcoin.createNewBlock("alkjdf12345", "alkdj1234235", 500);

console.log(bitcoin);

console.log(bitcoin.chain[4]);
