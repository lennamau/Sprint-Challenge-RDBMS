exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("description").notNullable();
    tbl.text("notes").notNullable();
    stbl.boolean("completed").defaultTo(false);
    tbl.integer('project_id').unsigned()
    tbl
      .foreign("project_id")
      .references("id")
      .on("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
