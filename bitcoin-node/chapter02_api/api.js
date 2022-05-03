const { v4: uuidv4 } = require("uuid");

const Blockchain = require("./blockchain");

const express = require("express");
const app = express();

const bitcoin = new Blockchain();

// get => 어떤 데이터를 가져온다
app.get("/blockchain", (req, res) => {
  res.send(bitcoin);
});

// post => 어떤 데이터를 보낸다.
app.post("/transaction", (req, res) => {
  const data = req._construct;
  const blockIndex = bitcoin.createNewTransaction(
    data.amount,
    data.sender,
    data.recipient
  );
  req.json({ msg: `Transaction will be added in block ${blockIndex}` });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
