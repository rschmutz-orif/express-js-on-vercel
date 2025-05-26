const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API root");
});


app.get("/hello", (req, res) => {
    res.send("Hello world from Vercel !");
  });
  
app.listen(port, () => {
  `Server started on port ${port}`;
});