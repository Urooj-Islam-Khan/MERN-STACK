require("dotenv").config();
// basic way to require express.js
const express = require("express");
// app k andr express k sare functions hain
const app = express();
// port address jahan data listen krte hain
const port = process.env.PORT;
// '/' route means home address ye request bhejega or response dega
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Urooj Islam Khan");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome Urooj</h1>");
});

app.get("/insta", (req, res) => {
  res.send(
    "<h1>Hello, Welcome to my First Backend Page </h1><br><h4>This is express.js</h4>",
  );
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
