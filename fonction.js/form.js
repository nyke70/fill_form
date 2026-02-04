const { DataTypes } = require("sequelize");
const sequelize = require("../utile");

const User = sequelize.define("User", {
   id: {type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  nom: { type: DataTypes.STRING },
  prenom: { type: DataTypes.STRING },
  tel: { type: DataTypes.INTEGER, unique: true },
  email: { type: DataTypes.STRING, unique: true },
  document: { type: DataTypes.STRING },
  service:{type : DataTypes.BOOLEAN},
});
module.exports = User;