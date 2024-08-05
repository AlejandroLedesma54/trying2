import { Sequelize } from 'sequelize-typescript';
import { User, Product } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql', // lenguage de SQL
    host: 'bzlfwhntrfzdxylmuc6z-mysql.services.clever-cloud.com', //INFO FROM SERVER
    username: 'ufamgxkgbvvwvupv', //INFO FROM SERVER
    password: '1ESZquF1JVC0PVpa5UGn',//INFO FROM SERVER
    database: 'bzlfwhntrfzdxylmuc6z', //INFO FROM SERVER
    models: [User, Product], // Añade todos tus modelos aquí
});

export default sequelize;
