import CategoryRepository, {Category} from "../../repository/categoryRepository";

const axios = require('axios').default;

export default class DrinksByCategoryProvider {

    private readonly API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';
    private categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository()
    }

    public async provide(): Promise<Map<number, string[]>> {

        return await this.bulkDownloadByCategories(await this.categoryRepository.findAll())

    }

    private async bulkDownloadByCategories(categories: Category[]): Promise<Map<number, string[]>> {

        let data = new Map()

        for (const category of categories) {
            const response = await axios.get(this.API + '?c=' + category.name)
            data.set(category.id, response['data']['drinks'].map(drink => {
                return drink['idDrink']
            }))
        }

        return data
    }

}