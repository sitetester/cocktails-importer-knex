import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('drinks', (table) => {
        table.integer('id').primary()
        table.string('name').notNullable()
        table.string('glass').notNullable()
        table.string('alcoholic').notNullable()
        table.string('thumbnail').nullable()
        table.string('instructions').notNullable()
        table.string('category').notNullable().references('id').inTable('categories')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable('drinks')
}

