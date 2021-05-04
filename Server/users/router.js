const router = require("express").Router();
const passport = require("passport")
const passportService = require("../services/passportsetup")
const UC = require("./controller")
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignIn = passport.authenticate('local', { session: false });

router.get("/", requireAuth, UC.getUsers)
router.post("/signup", UC.signup)
router.post('/signin', requireSignIn, UC.signin)

module.exports = router;