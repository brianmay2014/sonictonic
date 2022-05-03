//resources for route paths beginning with /api/song

const express = require("express");
const asyncHandler = require("express-async-handler");

// const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User, Album, Genre, Song } = require("../../db/models");

//validation and check
// const { check } = require("express-validator");
// const { handleValidationErrors } = require("../../utils/validation");

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
    
    router.get(`/:id`, asyncHandler(async function(req, res) {
        songId = req.params.id
        const song = await Song.findByPk();
        return res.json(song);
    
    }));

    //add validations here?
    router.post(`/`, asyncHandler( async function (req, res) {

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

    }))

    router.put(`/:id`, asyncHandler(async function (req, res) {
        
        const song = await Song.findByPk(req.body.songId);
        song.songName = await req.body.songName;
        song.genreId = await req.body.genreId;
        // console.log(song);
        await song.save();
        
        return res.json(song);
        

        // console.log(req.body.genreId, req.body.songName, req.body.songId);
        // const song = await Song.update( 
        //     {genreId: req.body.genreId,
        //     songName: req.body.songName },
        //     { where: { id: req.body.songId}},
        // )

// console.log(song);

        // { songId: '58', songName: 'asdfssddsdf', genreId: 1, currentUser: 1 }
    }))





module.exports = router;