
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
  .then(function () {
    return knex('projects').insert([
      {
        name: 'project 1',
        description: 'description for project',
        completed: false
      },
      {
        name: 'project name 2',
        description: 'testing project description',
        completed: false
      },
      {
        name: 'project name seeding',
        description: 'description for project 3',
        completed: true
      },        
    ]);
  });
};