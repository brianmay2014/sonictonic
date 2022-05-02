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
			{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "War", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Grounds", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Mr. Motivator", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Anxiety", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Kill Them With Kindness", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Model Village", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Ne Touche Pas Moi", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Carcinogenic", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Reigns", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "The Lover", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "A Hymn", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "http://www.google.com", albumId: 1, genreId: 26, title: "Danke", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "Bad News", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "The Sad Waltzes Of Pietro Crespi", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "Bags Of Bones", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "Use Your Words", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "A Bird In Hand", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "Windows And Doorways", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "Femme Fatale", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "One Of These Days", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "http://www.google.com", albumId: 2, genreId: 14, title: "A Fever", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "One More Time", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Aerodynamic", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Digital Love", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Harder, Better, Faster, Stronger", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Crescendolls", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Night Vision", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Superheroes", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "High Life", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Something About Us", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Voyager", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Veridis Quo", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Short Circuit", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Face To Face", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "http://www.google.com", albumId: 3, genreId: 12, title: "Too Long", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "Sans toi", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "Images", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "Pauvre star", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "La bulle", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "Runnin' from you", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "Le visionnaire", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "Pourquoi", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "Make me love you", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "http://www.google.com", albumId: 4, genreId: 38, title: "Matin gris", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Lonely Loves", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Hockey Teeth", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Southern Drawl", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "For Good Reason", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "You're Bored, I'm Old", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Sunshine Blues", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Already Yours", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "What's Worse", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Let The Good Times Roll", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Try Tried Tryin", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Til The Morning", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "http://www.google.com", albumId: 5, genreId: 14, title: "Whole Wide World", createdAt: new Date(), updatedAt: new Date() },
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
