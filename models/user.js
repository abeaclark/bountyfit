"use strict"

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    fitbitID: DataTypes.STRING
  });

  return user;
};