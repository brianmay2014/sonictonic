'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genreName: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    Genre.hasMany(models.Song, { foreignKey: 'genreId' });
  };
  return Genre;
};