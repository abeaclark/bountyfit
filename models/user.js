"use strict"

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    fitbitID: DataTypes.STRING,
    fitbitAuthToken: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    avatar: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
  });

  return user;
};
