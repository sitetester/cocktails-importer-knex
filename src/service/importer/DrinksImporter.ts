import DrinksCategoriesImporter from "./DrinksCategoriesImporter";
import DrinksByCategoryProvider from "../provider/drinksByCategoryProvider";
import DrinksByIdProvider from "../provider/drinksByIdProvider";
import DrinksRepository from "../../repository/DrinksRepository";

export default class DrinksImporter {

    private drinksCategoriesImporter: DrinksCategoriesImporter
    private drinksByCategoryProvider: DrinksByCategoryProvider
    private drinksByIdProvider: DrinksByIdProvider

    private drinksRepository: DrinksRepository

    constructor() {
        this.drinksCategoriesImporter = new DrinksCategoriesImporter()
        this.drinksByCategoryProvider = new DrinksByCategoryProvider()
        this.drinksByIdProvider = new DrinksByIdProvider()

        this.drinksRepository = new DrinksRepository()
    }

    async import(): Promise<void> {

        // download and persist categories
        await new DrinksCategoriesImporter().import()

        // drinks by each category ID
        const drinksByCategories = await this.drinksByCategoryProvider.provide()

        drinksByCategories.forEach((idDrinks, categoryId) => {

            let ids: string[] = []
            for (let i = 0; i < idDrinks.length; i++) {
                ids.push(idDrinks[i]);
            }

            this.drinksByIdProvider.provide(ids, categoryId).then(drinks => {
                this.drinksRepository.save(drinks)
            })
        })
    }
}

