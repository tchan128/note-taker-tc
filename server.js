const express = require("express");
const app = express();
const path = require("path");
const uniqID = require('uniqid');

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

app.post(`/api/notes`, (req, res) => {
    console.log(req.body);
    const newNote = req.body;
    newNote.id = uniqID();
    
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err){
            console.log(err);
        } else {
        notesData.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notesData), 'utf8', function (err) {
            if (err) throw err;
            console.log('Saved!');
            res.json(notesData);
        });
    }});
});

app.delete('/api/notes/:id', (req, res) => {
    res.json({message: `Note has been deleted`});
    let noteID = req.params.id
    console.log(`From key: ${noteID}`);
    
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].id === noteID) {
            notesData.splice(i, i+1)
        }
    }
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);