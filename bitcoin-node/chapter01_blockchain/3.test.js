const Blockchain = require("./3.getLastBlock");
const bitcoin = new Blockchain();

bitcoin.createNewBlock("alkjdglkj1lk24", "alkjfdlk234235", 100);
bitcoin.createNewBlock("alkj234234dglkj1lk24", "alkjfdlk234235", 200);
bitcoin.createNewBlock("alkjdsdfsdfhglkj1lk24", "alkjfdlk234235", 500);
bitcoin.createNewBlock("alkjdglkj1l347k24", "alkjfdlk234235", 300);
bitcoin.createNewBlock("alkjdglkjsdfhsdfh1lk24", "alkjfdlk234235", 400);
bitcoin.createNewBlock("alkjdglkjsdfgsdh1lk24", "alkjfdlk234235", 600);

console.log(bitcoin.getLastBlock);
