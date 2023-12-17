const express = require("express");

const PORT = 3001; 

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);