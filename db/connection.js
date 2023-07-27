import { Sequelize } from "sequelize"

const db = new Sequelize('bancosolar','postgres','Fabian_14',{
    host:'localhost',
    dialect:'postgres'
})

export default db;
