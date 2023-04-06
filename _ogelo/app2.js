const express = require("express");
const fs = require("fs/promises");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello there", app: "Natours" });
});

app.get("/home", (req, res) => {
  res.status(200).json({ message: "This is the home page", author: "Ogelo" });
});

app.get("/friends", (req, res) => {
  res.status(200).end("These are your friends");
});

app.get("/book", (req, res) => {
  let fileContent = fs.readFileSync("./book.txt");
  res.end(fileContent);
});

app.post("/book", (req, res) => {
  let content = "here we post";
  async function example() {
    try {
      await fs.writeFile("./book.txt", content);
      console.log("file written");
      res.end("thanks");
      // file written successfully
    } catch (err) {
      console.error(err);
    }
  }
  example();
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
