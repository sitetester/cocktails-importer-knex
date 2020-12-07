import knexClient from "../db/knexClient";
import {Drinks} from "../service/provider/drinksByIdProvider";

export default class DrinksRepository {

    private readonly DRINKS_TABLE = 'drinks'

    async save(drinks: Drinks[]) {

        await knexClient(this.DRINKS_TABLE).insert(drinks)
    }

}