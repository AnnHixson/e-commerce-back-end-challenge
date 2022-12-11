// Set up the ProductTag table model

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js 
const sequelize = require('../config/connection');

// Initialize ProductTag model (table) by extending off Sequelize's Model class 
class ProductTag extends Model {}

// set up fields and rules for ProductTag model
ProductTag.init(
  // define model attributes
  {
    // define columns: id, product_id, tag_id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  // define other model options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// export the ProductTag model
module.exports = ProductTag;
