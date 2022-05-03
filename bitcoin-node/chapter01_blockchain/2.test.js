const Blockchain = require("./2.genesisBlock");
const bitcoin = new Blockchain();

console.log(bitcoin);

bitcoin.createNewBlock("00000", "alkjlgk234", 100);
