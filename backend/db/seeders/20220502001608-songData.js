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
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/01War.mp3", albumId: 1, genreId: 26, title: "War", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/02Grounds.mp3", albumId: 1, genreId: 26, title: "Grounds", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/03MrMotivator.mp3", albumId: 1, genreId: 26, title: "Mr. Motivator", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/04Anxiety.mp3", albumId: 1, genreId: 26, title: "Anxiety", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/05KillThemWithKindness.mp3", albumId: 1, genreId: 26, title: "Kill Them With Kindness", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/06ModelVillage.mp3", albumId: 1, genreId: 26, title: "Model Village", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/07NeTouchePasMoi.mp3", albumId: 1, genreId: 26, title: "Ne Touche Pas Moi", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/08Carcinogenic.mp3", albumId: 1, genreId: 26, title: "Carcinogenic", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/09Reigns.mp3", albumId: 1, genreId: 26, title: "Reigns", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/10TheLover.mp3", albumId: 1, genreId: 26, title: "The Lover", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/11AHymn.mp3", albumId: 1, genreId: 26, title: "A Hymn", createdAt: new Date(), updatedAt: new Date() },
{ userId: 4, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/12Danke.mp3", albumId: 1, genreId: 26, title: "Danke", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/AtHomeWithOwen/01BadNews.mp3", albumId: 2, genreId: 14, title: "Bad News", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/AtHomeWithOwen/02TheSadWaltzesOfPietroCrespi.mp3", albumId: 2, genreId: 14, title: "The Sad Waltzes Of Pietro Crespi", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/AtHomeWithOwen/03BagOfBones.mp3", albumId: 2, genreId: 14, title: "Bags Of Bones", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/AtHomeWithOwen/04UseYourWords.mp3", albumId: 2, genreId: 14, title: "Use Your Words", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/AtHomeWithOwen/05ABirdInHand.mp3", albumId: 2, genreId: 14, title: "A Bird In Hand", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/AtHomeWithOwen/06WindowsAndDoorways.mp3", albumId: 2, genreId: 14, title: "Windows And Doorways", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/AtHomeWithOwen/07FemmeFatale.mp3", albumId: 2, genreId: 14, title: "Femme Fatale", createdAt: new Date(), updatedAt: new Date() },
{ userId: 5, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/AtHomeWithOwen/08OneOfTheseDays.mp3", albumId: 2, genreId: 14, title: "One Of These Days", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/01OneMoreTime.mp3", albumId: 3, genreId: 12, title: "One More Time", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/02Aerodynamic.mp3", albumId: 3, genreId: 12, title: "Aerodynamic", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/03DigitalLove.mp3", albumId: 3, genreId: 12, title: "Digital Love", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/04HarderBetterFasterStronger.mp3", albumId: 3, genreId: 12, title: "Harder, Better, Faster, Stronger", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/05Crescendolls.mp3", albumId: 3, genreId: 12, title: "Crescendolls", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/06NightVision.mp3", albumId: 3, genreId: 12, title: "Night Vision", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/07Superheroes.mp3", albumId: 3, genreId: 12, title: "Superheroes", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/08HighLife.mp3", albumId: 3, genreId: 12, title: "High Life", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/09SomethingAboutUs.mp3", albumId: 3, genreId: 12, title: "Something About Us", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/10Voyager.mp3", albumId: 3, genreId: 12, title: "Voyager", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/11VeridisQuo.mp3", albumId: 3, genreId: 12, title: "Veridis Quo", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/12ShortCircuit.mp3", albumId: 3, genreId: 12, title: "Short Circuit", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/13FaceToFace.mp3", albumId: 3, genreId: 12, title: "Face To Face", createdAt: new Date(), updatedAt: new Date() },
{ userId: 6, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/Discovery/14TooLong.mp3", albumId: 3, genreId: 12, title: "Too Long", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/01LaRue.mp3", albumId: 4, genreId: 38, title: "La Rue", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/02Automne.mp3", albumId: 4, genreId: 38, title: "Automne", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/03LEnfantSamba.mp3", albumId: 4, genreId: 38, title: "L'Enfant Samba", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/04TroupeauBleu.mp3", albumId: 4, genreId: 38, title: "Troupeau Bleu", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/05PreludeA60Round.mp3", albumId: 4, genreId: 38, title: "Prelude A 60 Round", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/06GoRound.mp3", albumId: 4, genreId: 38, title: "Go Round", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/07ChansondunJourdHiver.mp3", albumId: 4, genreId: 38, title: "Chanson d'un Jour d'Hiver", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/08MaryetJeff.mp3", albumId: 4, genreId: 38, title: "Mary et Jeff", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/09HuitOctobre1971.mp3", albumId: 4, genreId: 38, title: "Huit Octobre 1971", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/10Sabbat13.mp3", albumId: 4, genreId: 38, title: "Sabbat (1 - 3)", createdAt: new Date(), updatedAt: new Date() },
{ userId: 7, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/TroupeauBleu/11Madbass.mp3", albumId: 4, genreId: 38, title: "Madbass", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/01LonelyLoves.mp3", albumId: 5, genreId: 14, title: "Lonely Loves", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/02HockeyTeeth.mp3", albumId: 5, genreId: 14, title: "Hockey Teeth", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/03SouthernDrawl.mp3", albumId: 5, genreId: 14, title: "Southern Drawl", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/04ForGoodReason.mp3", albumId: 5, genreId: 14, title: "For Good Reason", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/05YoureBoredImOld.mp3", albumId: 5, genreId: 14, title: "You're Bored, I'm Old", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/06SunshineBlues.mp3", albumId: 5, genreId: 14, title: "Sunshine Blues", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/07AlreadyYours.mp3", albumId: 5, genreId: 14, title: "Already Yours", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/08WhatsWorse.mp3", albumId: 5, genreId: 14, title: "What's Worse", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/09LetTheGoodTimesRoll.mp3", albumId: 5, genreId: 14, title: "Let The Good Times Roll", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/10TryTriedTryin.mp3", albumId: 5, genreId: 14, title: "Try Tried Tryin", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/11TilTheMorning.mp3", albumId: 5, genreId: 14, title: "Til The Morning", createdAt: new Date(), updatedAt: new Date() },
{ userId: 8, url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/PinkStrat/12WholeWideWorld.mp3", albumId: 5, genreId: 14, title: "Whole Wide World", createdAt: new Date(), updatedAt: new Date() },
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
