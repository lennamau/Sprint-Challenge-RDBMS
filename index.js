const db = require('./db')
const express = require('express')
const server = express();
const helmet = require("helmet");

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('Sprint project API')
});

// post project
server.post('/api/projects', (req, res) => {
    const newProject = req.body
    db.addProject(newProject)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500)
        .json({message: 'Project could not be added'})
    })
    
});
//post action
server.post('/api/actions', (req, res) => {
    const newAction = req.body
    db.addProject(newAction)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(err => {
        res.status(500)
        .json({message: 'Action could not be added'})
    })
    
    
});

//get project by id
server.get('/', (req, res) => {
    
});


const port = 4000;
server.listen(port, function() {
  console.log(`\n=== Projects API Listening on http://localhost:${port} ===\n`);
});
