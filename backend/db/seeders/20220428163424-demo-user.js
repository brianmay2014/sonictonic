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
				{
					email: "idles@band.com",
					username: "IDLES",
					hashedPassword: bcrypt.hashSync("idlespassword"),
				},
				{
					email: "owen@band.com",
					username: "Owen",
					hashedPassword: bcrypt.hashSync("owenpassword"),
				},
				{
					email: "daftpunk@band.com",
					username: "Daft Punk",
					hashedPassword: bcrypt.hashSync("daftpunkpassword"),
				},
				{
					email: "cortex@band.com",
					username: "Cortex",
					hashedPassword: bcrypt.hashSync("cortexpassword"),
				},
				{
					email: "bahamas@band.com",
					username: "Bahamas",
					hashedPassword: bcrypt.hashSync("bahamaspassword"),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			"Users",
			//from the walk through
			//commented out to null to match others for seeding updates
			// {
			// 	username: {
			// 		[Op.in]: ["Demo", "Brian", "Dustin"],
			// 	},
			// },
			null,
			
			{}	);
	},
};
