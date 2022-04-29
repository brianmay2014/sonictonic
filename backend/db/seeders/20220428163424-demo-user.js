'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					email: "demo@user.io",
					username: "Demo",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					email: "brian@user.io",
					username: "Brian",
					hashedPassword: bcrypt.hashSync("password2"),
				},
				{
					email: "dustin@user.io",
					username: "Dustin",
					hashedPassword: bcrypt.hashSync("password3"),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			"Users",
			{
				username: {
					[Op.in]: ["Demo", "Brian", "Dustin"],
				},
			}, {}	);
	},
};
