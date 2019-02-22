
exports.seed = function(knex, Promise) {
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: "description for actions",
          notes: "notes for actions",
          completed: false
        },
        {
          project_id: 1,
          description: "testing actions desc",
          notes: "testing notes in actions",
          completed: false
        },
        {
          project_id: 2,
          description: "description for action test",
          notes: "notes for actions test",
          completed: false
        },
        {
          project_id: 2,
          description: "test for actions description",
          notes: "action notes test",
          completed: true
        },
        {
          project_id: 3,
          description: "des for astion table",
          notes: "notes in action table",
          completed: false
        },
      ]);
    });
};
