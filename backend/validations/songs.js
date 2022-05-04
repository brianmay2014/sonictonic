const { check } = require("express-validator");
const { handleValidationErrors } = require("../utils/validation");


const songName = check('songName')
    .notEmpty()
    .withMessage('Song name cannot be empty');
const albumName = check("albumName")
    .notEmpty()
    .withMessage("Album name cannot be empty");
const genreId = check('genreId')
    .notEmpty()
    .withMessage("Genre cannot be empty")
    .isInt({ min: 0});

exports.validateSongCreate = [
    handleValidationErrors
]

exports.validateSongEdit = [
    songName,
    genreId,
    handleValidationErrors
]