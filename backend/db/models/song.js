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
    Song.hasMany(models.Comment, { foreignKey: "songId" });
    Song.belongsTo(models.Album, { foreignKey: 'albumId' });
    Song.belongsTo(models.Genre, { foreignKey: 'genreId' });
    Song.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Song;
};