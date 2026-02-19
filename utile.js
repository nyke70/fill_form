const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'form_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',   // mot de passe vide si MySQL local n’en a pas
  {
    host: process.env.DB_HOST || 'host.docker.internal', // accès MySQL local depuis Docker
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false
  }
);

module.exports=sequelize;