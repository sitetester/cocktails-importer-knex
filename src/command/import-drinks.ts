#!/usr/bin/env node

import DrinksImporter from "../service/importer/drinksImporter";

const chalk = require('chalk');
console.log('Importing drinks...')

new DrinksImporter().import()
    .then(() => {
        console.log(
            chalk.green("Success!")
        )
    })
    .catch(err => {
        console.log(
            chalk.red(`Something went wrong` + err.message)
        )
    })