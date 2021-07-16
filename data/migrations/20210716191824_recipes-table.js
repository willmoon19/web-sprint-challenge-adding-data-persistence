
exports.up = function(knex) {
   return knex.schema
    .createTable('projects', tbl => {
       tbl.increments('project_id')
       tbl.string('project_name').notNullable()
       tbl.string('project_description')
       tbl.integer('project_completed').defaultTo(0)
    })
    .createTable('resources', tbl => {
       tbl.increments('resource_id')
       tbl.string('resource_name').notNullable().unique()
       tbl.string('resource_description')
    })
    .createTable('tasks', tbl => {
       tbl.increments('task_id')
       tbl.string('task_description').notNullable()
       tbl.string('task_notes')
       tbl.integer('task_completed').defaultTo(0)
       tbl.integer('project_id')
          .unasigned()
          .notNullable()
          .references('project_id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
    .createTable('project_resources', tbl => {
       tbl.integer('project_id')
          .unasigned()
          .notNullable()
          .references('project_id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
       tbl.integer('resource_id')
          .unasigned()
          .notNullable()
          .references('resource_id')
          .inTable('resources')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
 };
 
 exports.down = function(knex) {
   return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
 };
 