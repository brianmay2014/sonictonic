'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Genres', [
     { name: "Alternative Rock", createdAt: new Date(), updatedAt: new Date() },
{ name: "Ambient", createdAt: new Date(), updatedAt: new Date() },
{ name: "Blues", createdAt: new Date(), updatedAt: new Date() },
{ name: "Classical", createdAt: new Date(), updatedAt: new Date() },
{ name: "Country", createdAt: new Date(), updatedAt: new Date() },
{ name: "Dance & EDM", createdAt: new Date(), updatedAt: new Date() },
{ name: "Dancehall", createdAt: new Date(), updatedAt: new Date() },
{ name: "Deep House", createdAt: new Date(), updatedAt: new Date() },
{ name: "Disco", createdAt: new Date(), updatedAt: new Date() },
{ name: "Drum & Bass", createdAt: new Date(), updatedAt: new Date() },
{ name: "Dubstep", createdAt: new Date(), updatedAt: new Date() },
{ name: "Electronic", createdAt: new Date(), updatedAt: new Date() },
{ name: "Experimental", createdAt: new Date(), updatedAt: new Date() },
{ name: "Folk & Singer-Songwriter", createdAt: new Date(), updatedAt: new Date() },
{ name: "Grindcore", createdAt: new Date(), updatedAt: new Date() },
{ name: "Hip-hop & Rap", createdAt: new Date(), updatedAt: new Date() },
{ name: "House", createdAt: new Date(), updatedAt: new Date() },
{ name: "Indie", createdAt: new Date(), updatedAt: new Date() },
{ name: "Jazz", createdAt: new Date(), updatedAt: new Date() },
{ name: "Latin", createdAt: new Date(), updatedAt: new Date() },
{ name: "Metal", createdAt: new Date(), updatedAt: new Date() },
{ name: "Noise Punk", createdAt: new Date(), updatedAt: new Date() },
{ name: "Piano", createdAt: new Date(), updatedAt: new Date() },
{ name: "Pop", createdAt: new Date(), updatedAt: new Date() },
{ name: "Pop Punk", createdAt: new Date(), updatedAt: new Date() },
{ name: "Punk", createdAt: new Date(), updatedAt: new Date() },
{ name: "R&B", createdAt: new Date(), updatedAt: new Date() },
{ name: "Reggae", createdAt: new Date(), updatedAt: new Date() },
{ name: "Reggaeton", createdAt: new Date(), updatedAt: new Date() },
{ name: "Rock", createdAt: new Date(), updatedAt: new Date() },
{ name: "Soul", createdAt: new Date(), updatedAt: new Date() },
{ name: "Soundtrack", createdAt: new Date(), updatedAt: new Date() },
{ name: "Techno", createdAt: new Date(), updatedAt: new Date() },
{ name: "Thrash Metal", createdAt: new Date(), updatedAt: new Date() },
{ name: "Trance", createdAt: new Date(), updatedAt: new Date() },
{ name: "Trap", createdAt: new Date(), updatedAt: new Date() },
{ name: "Triphop", createdAt: new Date(), updatedAt: new Date() },
{ name: "World", createdAt: new Date(), updatedAt: new Date() }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Genres', null, {});
  }
};
