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

app.post(`/api/notes`, (req, res) => {
    res.json({message: `New note is created: ${req.body.title}`});
    console.log(req.body);
    const newNote = req.body;
    
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err){
            console.log(err);
        } else {
        const notes = JSON.parse(data);
        notes.push(newNote)
        const updatedNotes = JSON.stringify(notes); 
        fs.writeFile('./db/db.json', updatedNotes, 'utf8', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }});
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);