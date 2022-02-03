import { Sequelize } from "sequelize";

 export default new Sequelize('lexique_lv', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
})