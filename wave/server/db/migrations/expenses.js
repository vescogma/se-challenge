exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('employees', table => {
      table.increments('id').primary();
      table.text('name').notNullable();
      table.text('address').notNullable();
    }),
    knex.schema.createTable('expenses', table => {
      table.increments('id').primary();
      table.date('date').notNullable();
      table.text('category').notNullable();
      table.integer('name').notNullable()
        .references('id')
        .inTable('employees');
      table.text('description').notNullable();
      table.decimal('pretax').notNullable();
      table.text('taxname').notNullable();
      table.decimal('tax').notNullable();
    }),
  ]);
};

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('expenses'),
  knex.schema.dropTable('employees'),
]);
