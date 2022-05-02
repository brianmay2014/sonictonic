const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const songRouter = require('./song');

router.use("/session", sessionRouter);
router.use('/song', songRouter);
router.use("/users", usersRouter);


module.exports = router;

/*

test route for api routes

router.post("/test", (req, res) => {
	res.json({ requestBody: req.body });
});




test routes during auth set up for cookies, require auth, restore user

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
}));

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

//post test
router.post("/test", function (req, res) {
	res.json({ requestBody: req.body });
});

*/
