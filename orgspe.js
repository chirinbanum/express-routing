const express = require('express');
const path = require('path');
const app = express();
const port = 1000;


app.get('/home', (req, res) => {
    res.sendFile(__dirname+"/"+"home.html");
  });

app.get('/about', (req, res) => {
  res.sendFile(__dirname+"/"+"about.html");
});

app.get('/product', (req, res) => {
    res.sendFile(__dirname+"/"+"product.html");
  });

  app.get('/contact', (req, res) => {
    res.sendFile(__dirname+"/"+"contact.html");
  });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
