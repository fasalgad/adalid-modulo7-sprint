import { DataTypes } from "sequelize";
import db from '../db/connection.js';

const Usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    balance: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
},
    {
        timestamps: true,
    }
)

export default Usuario;