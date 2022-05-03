const Blockchain = require("./1.createNewBlock");

console.log(Blockchain);

const bitcoin = new Blockchain();
console.log(bitcoin);

bitcoin.createNewBlock("0000003exb00awg3566", "2lk3jlgk24y42", 100);

console.log("bitcoin after creating a block => ", bitcoin);
