const express = require("express");
const app = express();
const path = require("path");

const fs = require("fs");

const PORT = 3001; 

const notesData = require('./db/db.json');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname), 'public/index.html')
);

app.get(`/notes`, (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get(`/api/notes`, (req, res) =>
    res.json(notesData)
);

app.post(`/api/notes`, (req, res) => 
    res.json({message: `New note is created: ${req.body.title}`})
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);