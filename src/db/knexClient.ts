const dbConfig = require('../../knexfile');
import * as Knex from "knex";

const knexClient: Knex = Knex(dbConfig as Knex.Config)

export default knexClient