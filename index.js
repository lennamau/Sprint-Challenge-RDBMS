const db = require('./db.js')
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
    .then(proj=> {
        res.status(201).json(proj)
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
    .then(act => {
        res.status(201).json(act)
    })
    .catch(err => {
        res.status(500)
        .json({message: 'Action could not be added'})
    })
    
    
});

//get project by id
server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params
    db.getProjectById(id)
    .then(project => {
        if(project.length > 0) {
            res.json(project)
        } else{
            res.status(404)
            .json({ message: 'There is no project with the ID provided'})
        }
    })
    .catch(err => {
        res.status(500)
        .json({message: 'Could not retrieve project'})
    })
});

//get projects

server.get('/api/projects', (req, res) => {
    db.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(() => {
        res.status(500).json({ error: 'No project information could be retrieved. '});
    });
    
});


//get actions

server.get('/api/actions', (req, res) => {
    db.getActions()
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(() => {
        res.status(500).json({ error: 'No action information could be retrieved. '});
    });
    
});

//get actions by id



const port = 4000;
server.listen(port, function() {
  console.log(`\n=== Projects API Listening on http://localhost:${port} ===\n`);
});
