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
    console.log('hello');
    const songs = await Song.findAll(
        {
            include: [Album, User, Genre]
        }
        );
        return res.json(songs);
        
    }));
    
    router.get(`/:id`, asyncHandler(async function(req, res) {
        songId = req.params.id
        const song = await Song.findByPk();
        return res.json(song);
    
    }));





module.exports = router;