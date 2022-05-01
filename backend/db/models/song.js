'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};