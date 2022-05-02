'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
		"Songs",
		[
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "War",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Grounds",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Mr. Motivator",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Anxiety",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Kill Them With Kindness",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Model Village",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Ne Touche Pas Moi",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Carcinogenic",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Reigns",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "The Lover",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "A Hymn",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 4,
				url: "http://www.google.com",
				albumId: 1,
				genreId: 26,
				title: "Danke",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		{}
   );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};
