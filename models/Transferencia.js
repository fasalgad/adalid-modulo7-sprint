import { DataTypes } from "sequelize";
import db from '../db/connection.js';

const Transferencia = db.define('transferencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    emisor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receptor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    monto: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
    }
},
    {
        timestamps: false
    }
)

export default Transferencia;