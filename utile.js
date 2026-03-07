const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,        // form_db
  process.env.DB_USER,        // form_user
  process.env.DB_PASSWORD,    // form_password
  {
    host: process.env.DB_HOST, // mysql (nom du service Docker)
    port: process.env.DB_PORT, // 3306
    dialect: 'mysql',
    logging: false
  }
);

module.exports = sequelize;