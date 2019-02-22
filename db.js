const knex = require('knex')
const knexConfig = require('./knexfile')

const db = knex(knexConfig.development)

module.exports = {
    addProject,
    addAction,
    getProject
}

function addProject(project){
    return db('projects')
    .insert(project)
    .then(ids => ({id: ids[0]}))
}

function addAction(action){
    return db('actions')
    .insert(action)
    .then(ids => ({id: ids[0]}))
}

function getProject(id) {
    return db('projects')
    .where('projects.id', id)
    .leftJoin('actions', {'projects.id': 'project_id'})
}