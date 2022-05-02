'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
		"Albums",
		[
			{
				userId: 4,
				albumName: "Ultra Mono",
				imageUrl:
					"https://media.pitchfork.com/photos/5f6ce8e1ffb0eebbb428ceff/1:1/w_600/ultra%20mono_idles.jpg",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 5,
				albumName: "At Home With Owen",
				imageUrl: "https://f4.bcbits.com/img/a3137103707_10.jpg",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 6,
				albumName: "Discovery",
				imageUrl:
					"https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 7,
				albumName: "Troupeau Bleu",
				imageUrl:
					"https://e.snmc.io/i/600/s/e159d4c9747c379f69e7722909e85458/7124481/cortex-troupeau-bleu-Cover-Art.jpg",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				userId: 8,
				albumName: "Pink Strat",
				imageUrl:
					"https://americansongwriter.com/wp-content/uploads/2011/05/51GWpYHvczL.jpg",
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
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
