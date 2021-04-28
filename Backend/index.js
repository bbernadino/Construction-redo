const express = require("express");
const app = express();
const port = 4000;
// const path = require("path");


// app.get("/", (req, res) => {
//  // res.send("Hello World!");
//  res.sendFile(path.join(__dirname, "../Frontend", "index.js"));
// });

//add middleware
app.use(express.static("../Frontend"));

app.listen(port, () => {
  console.log(`🚀 http://localhost:${port}`);
});
