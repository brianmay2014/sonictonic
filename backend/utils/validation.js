const { validationResult } = require("express-validator");

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
	const validationErrors = validationResult(req);

	if (!validationErrors.isEmpty()) {
        //if there are errors, create array with validation error messages
		const errors = validationErrors.array().map((error) => `${error.msg}`);

		const err = Error("Bad request.");
		err.errors = errors;
		err.status = 400;
		err.title = "Bad request.";
        //invoke the next error handling middleware
		next(err);
	}
    //if validationErrors is empty, call next middleware
	next();
};

module.exports = {
	handleValidationErrors,
};
