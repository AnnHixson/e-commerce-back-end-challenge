// Set up the Tag table model

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js 
const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// set up fields and rules for Tag model
Tag.init(
  // define model attributes
  {
    // define columns: id, tag_name
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  // define other model options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// export the Tag model
module.exports = Tag;
