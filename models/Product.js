// Set up the Product table model

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  // define model attributes
  {
    // define columns: id, product_name, price, stock, category_id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // validate
      validate: {
        // check if value is a decimal
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // set default value
      defaultValue: 10,
      validate: {
        // check if value is a number
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      // reference
      references: {
        // Category model
        model: 'category',
        // Category model id column
        key: 'id'
      }
    }
  },
  // define other model options
  {
    sequelize,
    timestamps: false,
    // table name is the model name
    freezeTableName: true,
    // attribute names in snake_case
    underscored: true,
    // the model name
    modelName: 'product',
  }
);

// export the Product model
module.exports = Product;
