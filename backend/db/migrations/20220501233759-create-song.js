'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Songs", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		userId: {
			allowNull: false,
			type: Sequelize.INTEGER,
			references: { model: "Users" },
		},
		url: {
			allowNull: false,
			type: Sequelize.STRING,
		},
		albumId: {
			allowNull: false,
			type: Sequelize.INTEGER,
			references: { model: "Albums" },
		},
		genreId: {
			allowNull: false,
			type: Sequelize.INTEGER,
			references: { model : "Genres" },
		},
		title: {
			allowNull: false,
			type: Sequelize.STRING,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};