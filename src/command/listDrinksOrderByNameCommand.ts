import DrinksRepository from "../repository/drinksRepository";

new DrinksRepository().getSortedByName().then(data => {
    console.table(data)
})
