const { check } = require("express-validator");
const { handleValidationErrors } = require("../utils/validation");


const songName = check('songName')
    .notEmpty()
    .withMessage('Song name cannot be empty')
    .custom(value => {
        if (value.endsWith(' ')) {
            throw Error("Song name cannot end with a space");
        }
        return true;
    });
const albumName = check("albumName")
    .notEmpty()
    .withMessage("Album name cannot be empty")
    .custom(value => {
        if (value.endsWith(' ')) {
            throw Error("Album name cannot end with a space");
        }
        return true;
    });
const genreId = check('genreId')
    .notEmpty()
    .withMessage("Genre cannot be empty")
    .isInt({ min: 0});
const songUrl = check("songUrl")
	.notEmpty()
	.withMessage("Must include a link to upload a song")
	.isURL({ require_protocol: false, require_host: false })
	.withMessage("Song Link must be a URL")
    .custom(value => {
        if (!value.endsWith('.mp3')) {
            throw Error("Please enter a mp3 link");
        }
        return true;
    });
const albumArt = check("albumArt")
	.notEmpty()
	.withMessage("Must include a link to upload a song")
	.isURL({ require_protocol: false, require_host: false })
	.withMessage("Album Art Link must be a URL")
    .custom(value => {
        if (value.endsWith('.jpg') || value.endsWith(".jpeg") || (value.endsWith(".png"))) {
         return true;
        } else {
            throw Error(`Please enter a .jpg, .jpeg, or .png link`);
        }
        // return true;
    });
const body = check("body")
	.notEmpty()
	.withMessage("Comment body cannot be empty");

exports.validateSongCreate = [
    songName,
    albumName,
    genreId,
    songUrl,
    albumArt,
    handleValidationErrors
]

exports.validateSongEdit = [
    songName,
    genreId,
    handleValidationErrors
]

exports.validationCommentCreate = [
    body,
    handleValidationErrors
]
