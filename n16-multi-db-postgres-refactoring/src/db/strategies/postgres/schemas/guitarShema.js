const Sequelize = require("sequelize");

const GuitarSchema = {
  name: "guitars",
  schema: {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: Sequelize.STRING,
      required: true,
    },
    color: {
      type: Sequelize.STRING,
      required: true,
    },
  },
  options: {
    tableName: "TB_GUITARS",
    freezeTableName: false,
    timestamps: false,
  }
};

module.exports = GuitarSchema
