import CategoryRepository, {Category} from "../../repository/categoryRepository";

const axios = require('axios').default;

export default class DrinksCategoriesImporter {

    private readonly API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    private categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository()
    }

    // download and persists categories
    public async import(): Promise<void> {

        const strCategories: string[] = await this.download()
        const categories: Category[] = strCategories.map(strCategory => {
            return {'name': strCategory['strCategory']}
        })

        await this.categoryRepository.save(categories)
    }

    private async download(): Promise<string[]> {

        let categories: [] = []
        try {
            const response = await axios.get(this.API);
            categories = response['data']['drinks']
        } catch (error) {
            console.error(error);
        }

        return categories
    }
}