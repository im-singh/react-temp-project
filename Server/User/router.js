const router = require("express").Router();
const passport = require("passport")

const passportService = require("../services/passportsetup")
const UC = require("./controller")
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignIn = passport.authenticate('local', { session: false });

router.post("/signin", requireSignIn, UC.signin)
router.get("/user", requireAuth, UC.getUsers)
router.post("/signup", UC.signup);


module.exports = router;