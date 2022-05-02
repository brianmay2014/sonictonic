'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Genres', [
     { genreName: "Alternative Rock", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Ambient", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Blues", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Classical", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Country", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Dance & EDM", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Dancehall", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Deep House", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Disco", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Drum & Bass", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Dubstep", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Electronic", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Experimental", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Folk & Singer-Songwriter", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Grindcore", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Hip-hop & Rap", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "House", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Indie", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Jazz", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Latin", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Metal", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Noise Punk", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Piano", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Pop", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Pop Punk", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Punk", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "R&B", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Reggae", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Reggaeton", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Rock", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Soul", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Soundtrack", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Techno", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Thrash Metal", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Trance", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Trap", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "Triphop", createdAt: new Date(), updatedAt: new Date() },
{ genreName: "World", createdAt: new Date(), updatedAt: new Date() }
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
