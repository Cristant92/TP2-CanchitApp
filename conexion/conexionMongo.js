const mongoClient = require('mongodb').MongoClient;
const chalk = require('chalk');
const dotent = require ('dotenv');

const uriMongo = process.env.URIMONGO;
console.log(uriMongo);

const client = new mongoClient(uriMongo, {useUnifiedTopology: true, useNewUrlParser: true });

async function getConnection(){
    return await client.connect().catch(err => console.log(chalk.red(err)));
}

module.exports = {getConnection};