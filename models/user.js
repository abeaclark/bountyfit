"use strict"

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    fitbitID: DataTypes.STRING
  });

  return User;
};