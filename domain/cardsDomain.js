import sequelize from 'sequelize'
import db from '../db/db.js'

const { DataTypes } = sequelize
const cards = db.define('cards', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      vi: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fr: {
        type: DataTypes.STRING,
        allowNull: false
      },
      exemple: {
        type: DataTypes.TEXT
      },
      sens2: {
        type: DataTypes.STRING
      },
      sens3: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
})

export default cards