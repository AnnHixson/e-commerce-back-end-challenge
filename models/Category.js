// Set up the Category table model

// require sequelize package
const { Model, DataTypes } = require('sequelize');

// require the database connection configuration
const sequelize = require('../config/connection.js');

// create a new sequelize model for Categories
class Category extends Model {}

// Set up the table Category
Category.init(
  // define model attributes (table columns)
  {
    // define columns: id, category_name
    // column name
    id: {
      // data type
      type: DataTypes.INTEGER,
      // do not allow null value
      allowNull: false,
      // set as primary key
      primaryKey: true,
      // set to auto-increment
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  // define other model options
  {
    // pass the connection instance
    sequelize,
    // remove timestamps
    timestamps: false,
    // table name is the model name
    freezeTableName: true,
    // sets field option on attribute names to snake_case
    underscored: true,
    // the model name
    modelName: 'category',
  }
);

// export the Category model
module.exports = Category;
