import knexClient from "../db/knexClient";
import {Drinks} from "../service/provider/drinksByIdProvider";
import {CATEGORY_TABLE} from "./categoryRepository";


export default class DrinksRepository {

    async save(drinks: Drinks[]) {

        await knexClient(DRINKS_TABLE).insert(drinks)
    }

    async getSortedByName(): Promise<object[]> {

        return knexClient(DRINKS_TABLE + ' as d')
            .join(CATEGORY_TABLE + ' as c', 'd.category', '=', 'c.id')
            .select('d.id', 'd.name', 'd.alcoholic', 'c.name as categoryName')
            ;
    }
}

export const DRINKS_TABLE = 'drinks'