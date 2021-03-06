//resources for route paths beginning with /api/song

const express = require("express");
const asyncHandler = require("express-async-handler");

// const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User, Album, Genre, Song, Comment } = require("../../db/models");

//validation and check
// const { check } = require("express-validator");
// const { handleValidationErrors } = require("../../utils/validation");

const songValidations = require('../../validations/songs');

const router = express.Router();



router.get(`/all`, asyncHandler(async function(req, res) {
    const songs = await Song.findAll(
        {
            include: [Album, User, Genre]
        }
        );
        return res.json(songs);
        
    }));

    router.get(`/genres`, asyncHandler(async function(req, res) {
        const genres = await Genre.findAll();
        return res.json(genres);
    }))

    router.get(`/:id/comments`, asyncHandler(async function(req, res) {
        songId = req.params.id;
        const comments = await Comment.findAll(
            {
                where: { songId },
                include: [User, Song]
            }
        );
        return res.json(comments);
    }))
    
    router.get(`/:id`, asyncHandler(async function(req, res) {
		songId = req.params.id;
        // console.log('songid inside get route for said song', songId)
		const song = await Song.findByPk(songId);

        // const song = await Song.findByPk();

                // const retSong = Song.findByPk(song.id, {
				// 	include: { model: Album },
				// });

				// return res.json(retSong);

		return res.json(song);

        //Bill note
		//Similarly, you could add the include the models in your .get('/:id' instead and res.redirect to that route
	}));



    router.post(
        `/`,
        songValidations.validateSongCreate,
        asyncHandler( async function (req, res) {

        const {songName, songUrl, albumName, albumArt, genreId, currentUser} = req.body;
        const album = await Album.create({
            userId: currentUser,
            albumName,
            imageUrl: albumArt
        });

        const newAlbumId = album.dataValues.id;

        
        const song = await Song.create({
            userId: currentUser,
            url: songUrl,
            albumId: newAlbumId,
            genreId,
            songName
            
        });
        
        const retSong = Song.findByPk(song.id, { include: { model: Album } });

        return res.json(retSong);
        // return res.json(song);

    }))


    router.post(
        `/:id/comment`,
        // songValidations.validationCommentCreate,
        asyncHandler( async function (req, res) {
            const { body, songId, userId } = req.body;
            const comment = await Comment.create({
                body, userId, songId
            });

            const returnComment = await Comment.findByPk(
                comment.id,
                {include: [User, Song]}
                );

            return res.json(returnComment);
        }));

    router.put(
        `/:id`,
        songValidations.validateSongEdit,
        asyncHandler(async function (req, res) {
        
        const song = await Song.findByPk(req.body.songId, {
            include: [Album, User, Genre]
        });

        // console.log(req.body);

        song.songName = await req.body.songName;
        song.genreId = await req.body.genreId;
        await song.save();

        return res.json(song);
    }));

       router.delete(
			`/comment/:id`,
			asyncHandler(async function (req, res) {
                const commentId = parseInt(req.body.commentId, 10);


				await Comment.destroy({ where: { id: commentId } });
				return res.json(commentId);
			})
		); 

    router.delete(`/:id`, asyncHandler(async function (req, res) {
        const songId = parseInt(req.body.songId, 10);
        await Song.destroy({ where: { id: songId }});
        return res.json(songId);
    }));





module.exports = router;