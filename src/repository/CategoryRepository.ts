import knexClient from "../db/knexClient";

export interface Category {
    id?: number
    name: String
}

export default class CategoryRepository {

    private readonly CATEGORY_TABLE = 'categories'

    async save(categories: Category[]) {

        await knexClient(this.CATEGORY_TABLE).insert(categories)
    }

    async findAll(): Promise<Category[]> {

        const categories: Category[] = await knexClient.select('id', 'name').from(this.CATEGORY_TABLE);
        categories.map(c => {
            return {id: c['id'], name: c['name']}
        })

        return categories
    }
}