const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = 3001; 

const app = express();

const notesData = require('./db/db.json')

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get(`/notes`, (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);