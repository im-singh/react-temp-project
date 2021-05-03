const router = require("express").Router();
const UC = require("./controller")


router.get("/", UC.getUsers)
router.post("/signup", UC.signup)


module.exports = router;