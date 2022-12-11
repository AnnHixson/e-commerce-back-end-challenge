// Set up the database connection

// require and configure the dotenv package (.env) so my password isn't visible
require('dotenv').config();

// require the sequelize package to make it easier to use MySQL
const Sequelize = require('sequelize');

// create a connection object
const sequelize = process.env.JAWSDB_URL
// if you are deploying on heroku use this configuration
  ? new Sequelize(process.env.JAWSDB_URL)
  // if you are not deploying on heroku, use this configuration
  // this is where the .env info gets utilised
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      // database location
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        // allows decimals
        decimalNumbers: true,
      },
    });

// export the connection object
module.exports = sequelize;
