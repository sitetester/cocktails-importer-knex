import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('categories', (table) => {
            table.increments('id')
            table.string('name')
        })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable('categories')
}