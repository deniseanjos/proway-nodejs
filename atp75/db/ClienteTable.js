import { Sequelize } from "sequelize";
import Database from "./Database.js";

const ClienteTable = Database.define('tb_cliente', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nomeCliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenomeCliente:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default ClienteTable;