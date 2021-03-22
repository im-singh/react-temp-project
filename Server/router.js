const router = require('express').Router();
const ms = require('./ms');

router.route('/name/:id')
    .get(ms.lm)
    .put(ms.pl)

module.exports = router;