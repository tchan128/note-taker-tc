<br />
<div align="center">
    <a href="https://github.com/tchan128/note-taker-tc"><img src="./asset/take.png" alt="Logo" width="80" height="80"></a>
    <h3 align="center">Note Taker</h3>
    <p align="center">
        The motivation for this project is to create a note taker that users can use to create, view, and delete notes. Staying organize is very important as it allows one to stay on top of their task and know what needs to be done. It is very valuable to keep track of tasks/notes on hand that one can easily access and manipulate. I built this project as I understand how important and useful it is to have a space to keep track of all notes and reminders, especially if there is a lot of projects going on. This app is a solution for users who are seeking to find a quick and easy to use platform to keep track of their notes and make changes easily. Through this project, I deepened my understanding of the HTTP module and how GET, POST, and DELETE request works. It also allows me to understand how the front end and back end ties together and how we can use what we receive from the user and modify it to provide something back for them to see. This project also let me practice and understand how each of these requests work and what needs to be done in order for them to be made. 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

<details>
<summary>Table of Contents</summary>
<ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#visuals">Visuals</a></li>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions</a></li>
</ol>
</details>

## Description

This is a note taker that allows users to create, view, and delete notes. This project is built with Javascript, node.js, and the express.js module. In this project, there are 3 main components: Creating a new note, viewing a note, and deleting a note. Contrary to previous projects created, this uses next.js and express.js to store information on the local server. Instead of using local storage to retrieve and present data, we are using our local server and database to keep track of what new notes have been created and removed to show on the note taker. This application is deployed on Heroku.

![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## Installation

This project is deployed via Heroku where users can test out the functionalities. To install/use this project differently, user can clone this project and run it on their local computer. User should be able to run "node index.js" in the command line and open http://localhost:3001/ on their browser or Insomnia to test out the app. Other paths that users can test out is `/notes`, `/api/notes`, `/api/notes/:id`. 

- `/api/notes` allows for both GET and POST request

- `/api/notes/:id` allows for DELETE request

## Usage

Users can use this project to help them create, view, and delete notes. In this project, they will be able to have an app that keeps track of their notes to stay organize. When an user presses "New Note" the title and text of the note will be saved and added to the existing list of notes they have shown on the left side. Once the note/task is completed, they are able to press the red trashcan icon on the left side to delete the note. If they press on the note itself, the user will be able to view the text of the note. User can access this app and control these action via the deployed app on Heroku. 

## Visuals


## Contributions

The starter code for this note taker was from: https://github.com/coding-boot-camp/miniature-eureka

In addition to that, some websites that helped with the build of this generator include:

- node.js HTTP Module: https://www.w3schools.com/nodejs/nodejs_http.asp
- uniqid NPM Package: https://www.npmjs.com/package/uniqid
- ICON for README: <a href="https://www.flaticon.com/free-icons/take" title="take icons">Take icons created by Mayor Icons - Flaticon</a>
- Badges Used: https://github.com/alexandresanlim/Badges4-README.md-Profile

Please note that the template is modified to ensure everything needed is included.

The README template is found here: https://github.com/othneildrew/Best-README-Template

## Tests

No extensive testing was done for this project. 

Testing was done on Insomnia by checking what the response message would be for each request. Testing on functionality was also done both on local browser and Insomnia. GET request to http://localhost:3001/, http://localhost:3001/notes, and http://localhost:3001/api/notes were tested out. POST request to http://localhost:3001/api/notes was tested. Lastly, DELETE request at http://localhost:3001/:id was tested. From testing, users are able to make a POST request to create a new note which will appear in the note taker app, user are able to delete note based on it's unique ID, and users are able to load up the notes they have created. 

## License

MIT License was used for this project. Please refer to the repo for more information.

## Questions

For any questions you have, please do not hesitate to reach out to me. 

- Github Username: tchan128
- Email: tchan12899@gmail.com
- Github Repo: https://github.com/tchan128/note-taker-tc
- Deployed URL: 
